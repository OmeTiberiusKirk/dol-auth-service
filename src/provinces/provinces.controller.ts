import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProvincesService } from './provinces.service';

@Controller()
export class ProvincesController {
  constructor(private masterService: ProvincesService) {}

  @MessagePattern('PROVINCES')
  async getProvinces() {
    return await this.masterService.getProvinces();
  }
}
