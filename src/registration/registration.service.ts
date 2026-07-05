import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RpcException } from '@nestjs/microservices';
import { Prisma } from 'src/prisma-generated/prisma/client';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
import { CreateUserDto } from 'src/common/dto/create-user.dto';
config();

@Injectable()
export class RegistrationService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    try {
      await this.prisma.tb_user.create({ data: data.personal });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new RpcException({
          statusCode: HttpStatus.CONFLICT,
          message: 'This email address is already in use.',
        });
      }
    }

    return 'User registered successfully';
  }

  async sendOtpToMail() {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'nukool@40.co.th',
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        },
      });

      await transporter.verify();
      console.log('Server is ready to take our messages');
    } catch (err) {
      console.log(err);
    }
  }
}
