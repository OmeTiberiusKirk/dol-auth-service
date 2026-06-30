import { ApiProperty } from '@nestjs/swagger';

export class CreateTbUserConsentDto {
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  consent_version?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  consent_description?: string | null;
  @ApiProperty({
    type: 'boolean',
  })
  is_accepted!: boolean;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  accepted_at?: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  withdrawn_at?: Date | null;
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
  })
  created_by!: string;
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
