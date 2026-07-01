import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RegistrationService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: unknown) {
    // await this.prisma.tb_user.create({ data });
  }
}
