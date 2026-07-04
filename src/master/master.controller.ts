import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MasterService } from './master.service';

@Controller()
export class MasterController {
  constructor(private masterService: MasterService) {}

  @MessagePattern('PROVINCES')
  async getProvinces() {
    return await this.masterService.getProvinces();
  }

  @MessagePattern('DISTRICTS')
  async getDistrictByProvinceId(id: string) {
    return await this.masterService.getDistrictsByProvinceId(id);
  }

  @MessagePattern('SUB_DISTRICTS')
  async getSubDistrictByDistrictId(id: string) {
    return await this.masterService.getSubDistrictsByDistrictId(id);
  }
}
