import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbMsChannelDto {
  @ApiProperty({
    type: 'integer',
    format: 'int64',
  })
  channel_id!: bigint;
}
