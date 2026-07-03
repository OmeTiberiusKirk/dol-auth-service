import { Injectable } from '@nestjs/common';

@Injectable()
export class DistrictsService {
  async getDistricts(): Promise<string> {
    return 'Successfully fetched districts data';
  }
}
