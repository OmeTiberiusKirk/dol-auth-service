import { ApiProperty } from '@nestjs/swagger';

export class TbHisFailedLoginDto {
  @ApiProperty({
    type: 'string',
  })
  failed_login_id!: string;
  @ApiProperty({
    type: 'integer',
    format: 'int64',
  })
  login_method_id!: bigint;
  @ApiProperty({
    type: 'string',
  })
  username_input!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  ip_address!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  device_id!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  failure_reason!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  failed_at!: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at!: Date;
  @ApiProperty({
    type: 'string',
  })
  created_by!: string;
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
