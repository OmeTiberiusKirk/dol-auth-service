import { Module } from '@nestjs/common';
import { SubDistrictsController } from './sub-districts.controller';
import { SubDistrictsService } from './sub-districts.service';

@Module({
  controllers: [SubDistrictsController],
  providers: [SubDistrictsService],
})
export class SubDistrictsModule {}
