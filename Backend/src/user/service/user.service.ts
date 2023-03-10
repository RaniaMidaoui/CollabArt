import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorCode } from '../../shared/enums/error-code/error.enum';
import { ResponseList } from '../../shared/interfaces/response-list.interface';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserQueryDto } from '../dto/user-query.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findAll(dto: UserQueryDto): Promise<ResponseList<User>> {
    const { page, limit } = dto;
    const users = await this.userRepo.find({ skip: page - 1, take: limit });
    const totalCount = await this.userRepo.countBy({ isActive: true });
    return {
      data: users,
      totalCount,
      page,
      limit,
    };
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.userRepo.findOne({ where: { id } });

      if (!user) throw new BadRequestException('Error getting user');

      return user;
    } catch (e) {
      if (e.code === ErrorCode.INVALID_INPUT) {
        throw new BadRequestException('Invalid ID format provided');
      }
      throw e;
    }
  }
}
