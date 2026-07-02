import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto, PersonalDto } from './dto/create-user.dto';
import { validate } from 'class-validator';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class RegistrationService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    const personal = new PersonalDto(data.personal);
    const errors = await validate(personal);

    if (errors.length > 0) {
      const message = errors.flatMap((error) =>
        Object.values(error.constraints ?? {}),
      );

      throw new RpcException({
        statusCode: HttpStatus.BAD_REQUEST,
        error: 'Bad Request',
        message,
      });
    }

    await this.prisma.tb_user.create({ data: personal });

    return 'User registered successfully';
  }
}
