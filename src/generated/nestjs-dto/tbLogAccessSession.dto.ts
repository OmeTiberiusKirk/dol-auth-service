import { ApiProperty } from '@nestjs/swagger';

export class TbLogAccessSessionDto {
  @ApiProperty({
    type: 'string',
  })
  session_id!: string;
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
  kiosk_id!: string | null;
  @ApiProperty({
    type: 'string',
  })
  session_status!: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  started_at!: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  last_activity_at!: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  expired_at!: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  ended_at!: Date | null;
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
  updated_by!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  record_status!: string | null;
}
