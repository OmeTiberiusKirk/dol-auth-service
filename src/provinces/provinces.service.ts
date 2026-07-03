import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProvincesService {
  constructor(private prisma: PrismaService) {}

  async getProvinces() {
    try {
      return await this.prisma.tb_ms_province.findMany();
    } catch (error) {
      console.log(error);
    }
  }
}
