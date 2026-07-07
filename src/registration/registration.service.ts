import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RpcException } from '@nestjs/microservices';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
import { CreateUserDto } from 'src/common/dto/create-user.dto';
import { TbUser } from 'src/prisma-generated/nestjs-dto/tbUser.entity';
config();

@Injectable()
export class RegistrationService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    const { personal, address } = data;

    try {
      const user = await this.prisma.tb_user.findFirst({
        where: { email: personal.email },
      });

      if (user) {
        if (user.is_email_verified)
          throw new RpcException({
            statusCode: HttpStatus.CONFLICT,
            message: 'This email address is already in use.',
          });
        else
          throw new RpcException({
            statusCode: HttpStatus.FORBIDDEN,
            message: 'Email address not verified.',
          });
      } else {
        return await this.prisma.$transaction(async (tx) => {
          const { user_type_id, ...personalWithoutUserTypeId } = personal;
          const user = await tx.tb_user.create({
            data: {
              ...personalWithoutUserTypeId,
              tb_ms_user_type: { connect: { user_type_id } },
              tb_user_address: { create: address },
            },
            include: { tb_user_address: true, tb_ms_user_type: true },
          });
          console.log(user);
          return user;
        });
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async sendOtpToMail() {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.OAUTH2_EMAIL,
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
