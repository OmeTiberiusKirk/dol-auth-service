import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { validate } from 'class-validator';
import { RpcException } from '@nestjs/microservices';
import { Prisma } from 'src/prisma-generated/prisma/client';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
import { CreatePersonalDto } from './dto/create-personal.dto';
config();

@Injectable()
export class RegistrationService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    const personal = new CreatePersonalDto(data.personal);
    // const address = new CreateAddressDto(data.address);
    const errors = await validate(personal);

    if (errors.length > 0) {
      const message = errors.flatMap((error) =>
        Object.values(error.constraints ?? {}),
      );

      throw new RpcException({
        statusCode: HttpStatus.BAD_REQUEST,
        message,
      });
    }

    try {
      // const result = await this.prisma.tb_user.create({ data: personal });
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
