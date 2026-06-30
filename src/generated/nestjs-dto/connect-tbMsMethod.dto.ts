import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbMsMethodDto {
  @ApiProperty({
    type: 'integer',
    format: 'int64',
  })
  method_id!: bigint;
}
