import {
  BadRequestException,
  CACHE_MANAGER,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../user/entities/user.entity';
import { Repository } from 'typeorm';
import { UserCredentialsDto } from '../dto/user-credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ResendVerificationDto } from '../dto/resend-verification.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { AuthenticateDto } from '../dto/authenticate.dto';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { MailService } from '../../mail/mail.service';
import { Cache } from 'cache-manager';
import { ErrorCode } from '../../shared/enums/error-code/error.enum';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { ResponseObject } from '../../shared/interfaces/response-object.interface';
import { alreadyExist } from '../../shared/helpers/error-message/already-exist.helper';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private mailService: MailService,
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  async createUser(dto: UserCredentialsDto): Promise<User> {
    const { password } = dto;
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const user = this.userRepo.create({
        ...dto,
        password: hashedPassword,
        salt,
        isActive: true,
      });
      console.log(user);

      await this.userRepo.save(user);

      await this.sendVerificationEmail(user);

      return user;
    } catch (e) {
      if (e.code === ErrorCode.DUPLICATE) {
        throw new BadRequestException(alreadyExist('User'));
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async authenticate(dto: AuthenticateDto): Promise<AuthResponse> {
    const { email, password } = dto;
    const user = await this.userRepo.findOne({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException('Invalid credentials');
    if (!user.isActive)
      throw new BadRequestException('User is not yet verified');

    const userResponseData: AuthResponse = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };

    const jwtPayload: JwtPayload = { ...userResponseData };

    const accessToken = this.jwtService.sign(jwtPayload);

    return {
      accessToken,
      ...userResponseData,
    };
  }

  async logout(token: string): Promise<ResponseObject> {
    const accessToken = token.replace('Bearer ', '');

    await this.cacheService.set(accessToken, accessToken, { ttl: 3600 * 24 });
    return {
      status: 'success',
      message: "You've been logged out!",
    };
  }

  async resetPassword(u: User, dto: ResetPasswordDto): Promise<ResponseObject> {
    const { password } = dto;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.userRepo.preload({
      ...u,
      password: hashedPassword,
      salt,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    await this.userRepo.save(user);
    return { status: 'success' };
  }

  async requestResetPassword(email: string): Promise<ResponseObject> {
    try {
      const user = await this.userRepo.findOneBy({ email });
      if (!user) {
        await this.mailService.sendAccountNotFound(email);
        return;
      }

      const jwtPayload: Partial<JwtPayload> = {
        id: user.id,
      };

      const resetPasswordToken = this.jwtService.sign(jwtPayload);

      await this.mailService.sendResetPasswordLink(email, resetPasswordToken);

      return { status: 'success' };
    } catch (e) {
      throw e;
    }
  }

  async verifyUser(u: User): Promise<void> {
    try {
      const user = await this.userRepo.preload({
        ...u,
        isActive: true,
      });

      await this.userRepo.save(user);
    } catch (e) {
      throw e;
    }
  }

  async resendVerificationEmail(dto: ResendVerificationDto): Promise<void> {
    try {
      const { email } = dto;
      const user = await this.userRepo.findOneBy({ email });
      if (!user) {
        await this.mailService.sendAccountNotFound(email);
        return;
      }

      await this.sendVerificationEmail(user);
    } catch (e) {
      throw e;
    }
  }

  async sendVerificationEmail(user: User): Promise<void> {
    const jwtPayload: Partial<JwtPayload> = {
      id: user.id,
    };
    const verificationToken = this.jwtService.sign(jwtPayload);
    await this.mailService.sendVerification(user, verificationToken);
  }
}
