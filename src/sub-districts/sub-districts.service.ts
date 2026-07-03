import { Injectable } from '@nestjs/common';

@Injectable()
export class SubDistrictsService {
  async getSubDistricts(): Promise<string> {
    return 'Successfully fetched sub-districts data';
  }
}
