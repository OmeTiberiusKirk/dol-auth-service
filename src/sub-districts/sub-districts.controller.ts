import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SubDistrictsService } from './sub-districts.service';

@Controller()
export class SubDistrictsController {
  constructor(private readonly subDistrictsService: SubDistrictsService) {}

  @MessagePattern('SUB_DISTRICTS')
  async getSubDistricts(): Promise<string> {
    return this.subDistrictsService.getSubDistricts();
  }
}
