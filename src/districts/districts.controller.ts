import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DistrictsService } from './districts.service';

@Controller()
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @MessagePattern('DISTRICTS')
  async getDistricts(): Promise<string> {
    return this.districtsService.getDistricts();
  }
}
