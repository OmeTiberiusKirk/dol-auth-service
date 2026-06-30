import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbMsUserTypeDto {
  @ApiProperty({
    type: 'integer',
    format: 'int64',
  })
  user_type_id!: bigint;
}
