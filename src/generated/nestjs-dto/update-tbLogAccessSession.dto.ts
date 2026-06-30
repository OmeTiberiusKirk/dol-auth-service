import { ApiProperty } from '@nestjs/swagger';

export class UpdateTbLogAccessSessionDto {
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  ip_address?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  device_id?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  kiosk_id?: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  last_activity_at?: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  expired_at?: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  ended_at?: Date | null;
  @ApiProperty({
    type: 'string',
    required: false,
  })
  created_by?: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  updated_at?: Date | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  updated_by?: string | null;
  @ApiProperty({
    type: 'string',
    default: 'N',
    required: false,
    nullable: true,
  })
  record_status?: string | null;
}
