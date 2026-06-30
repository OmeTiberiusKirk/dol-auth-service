import { ApiProperty } from '@nestjs/swagger';

export class TbUserDto {
  @ApiProperty({
    type: 'string',
  })
  user_id!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  person_id!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  title!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  given_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  middle_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  family_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  title_en!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  given_name_en!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  middle_name_en!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  family_name_en!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  birth_date!: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  date_of_expiry!: Date | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  ial_level!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  legal_code!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  legal_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  land_office_id!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  land_office_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  land_office_position!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  private_office_id!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  private_office_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  email!: string | null;
  @ApiProperty({
    type: 'boolean',
    nullable: true,
  })
  is_email_verified!: boolean | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  mobile_no!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  verfity_at!: Date | null;
  @ApiProperty({
    type: 'boolean',
    nullable: true,
  })
  is_verify!: boolean | null;
  @ApiProperty({
    type: 'string',
  })
  user_status!: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at!: Date;
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
  })
  created_by!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  record_status!: string | null;
}
