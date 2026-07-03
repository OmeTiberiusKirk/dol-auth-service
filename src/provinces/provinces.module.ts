import { Module } from '@nestjs/common';
import { ProvincesController } from './provinces.controller';
import { ProvincesService } from './provinces.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProvincesController],
  providers: [ProvincesService, PrismaService],
})
export class MasterModule {}
