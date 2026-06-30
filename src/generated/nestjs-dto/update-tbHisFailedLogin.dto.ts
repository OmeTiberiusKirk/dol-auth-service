import { ApiProperty } from '@nestjs/swagger';

export class UpdateTbHisFailedLoginDto {
  @ApiProperty({
    type: 'integer',
    format: 'int64',
    required: false,
  })
  login_method_id?: bigint;
  @ApiProperty({
    type: 'string',
    required: false,
  })
  username_input?: string;
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
  failure_reason?: string | null;
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
  update_by?: string | null;
  @ApiProperty({
    type: 'string',
    default: 'N',
    required: false,
    nullable: true,
  })
  record_status?: string | null;
}
