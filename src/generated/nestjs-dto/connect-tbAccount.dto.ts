import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbAccountDto {
  @ApiProperty({
    type: 'string',
  })
  account_id!: string;
}
