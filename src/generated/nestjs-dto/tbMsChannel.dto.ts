import { ApiProperty } from '@nestjs/swagger';

export class TbMsChannelDto {
  @ApiProperty({
    type: 'integer',
    format: 'int64',
  })
  channel_id!: bigint;
  @ApiProperty({
    type: 'string',
  })
  channel_code!: string;
  @ApiProperty({
    type: 'string',
  })
  channel_name!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  description!: string | null;
  @ApiProperty({
    type: 'boolean',
    nullable: true,
  })
  is_active!: boolean | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  display_order!: number | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at!: Date;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  created_by!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  updated_at!: Date | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  update_by!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  record_status!: string | null;
}
