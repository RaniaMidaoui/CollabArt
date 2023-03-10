import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '../user/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendVerification(user: User, token: string) {
    const activitionLink = `http://localhost:3000/signup/verification?token=${token}`;
    const res = await this.mailerService.sendMail({
      to: user.email,
      subject: 'Account Verification',
      html: `Click this <a href="${activitionLink}">link</a> to verify your account`,
    });
    return res;
  }

  async sendResetPasswordLink(email: string, resetPasswordToken: string) {
    const resetLink = `http://localhost:3000/password?token=${resetPasswordToken}`;
    const res = await this.mailerService.sendMail({
      to: email,
      subject: 'Reset Password',
      html: `Click this <a href="${resetLink}">link</a> to proceed with the password reset`,
    });
    return res;
  }

  async sendAccountNotFound(email: string) {
    const res = await this.mailerService.sendMail({
      to: email,
      subject: 'Account Not Found',
      html: `Sorry your email: ${email} is not in our records`,
    });
    return res;
  }
}
