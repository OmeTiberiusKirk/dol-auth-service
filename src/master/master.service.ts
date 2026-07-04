import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MasterService {
  constructor(private prisma: PrismaService) {}

  async getProvinces() {
    try {
      return await this.prisma.tb_ms_province.findMany();
    } catch (error) {
      console.log(error);
    }
  }

  async getDistrictsByProvinceId(id: string) {
    try {
      return await this.prisma.tb_ms_amphur.findMany({
        where: {
          province_id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getSubDistrictsByDistrictId(id: string) {
    try {
      return await this.prisma.tb_ms_tambol.findMany({
        where: {
          amphur_id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
