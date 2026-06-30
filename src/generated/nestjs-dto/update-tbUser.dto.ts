import { ApiProperty } from '@nestjs/swagger';

export class UpdateTbUserDto {
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  person_id?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  title?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  given_name?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  middle_name?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  family_name?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  title_en?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  given_name_en?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  middle_name_en?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  family_name_en?: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  birth_date?: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  date_of_expiry?: Date | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  ial_level?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  legal_code?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  legal_name?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  land_office_id?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  land_office_name?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  land_office_position?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  private_office_id?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  private_office_name?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  email?: string | null;
  @ApiProperty({
    type: 'boolean',
    required: false,
    nullable: true,
  })
  is_email_verified?: boolean | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  mobile_no?: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  verfity_at?: Date | null;
  @ApiProperty({
    type: 'boolean',
    required: false,
    nullable: true,
  })
  is_verify?: boolean | null;
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
    required: false,
  })
  created_by?: string;
  @ApiProperty({
    type: 'string',
    default: 'N',
    required: false,
    nullable: true,
  })
  record_status?: string | null;
}
