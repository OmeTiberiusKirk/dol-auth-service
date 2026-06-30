import { ApiProperty } from '@nestjs/swagger';

export class TbMsUserTypeDto {
  @ApiProperty({
    type: 'integer',
    format: 'int64',
  })
  user_type_id!: bigint;
  @ApiProperty({
    type: 'string',
  })
  user_type_code!: string;
  @ApiProperty({
    type: 'string',
  })
  user_type_name!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  description!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  default_role_code!: string | null;
  @ApiProperty({
    type: 'boolean',
  })
  registration_allowed!: boolean;
  @ApiProperty({
    type: 'boolean',
  })
  login_allowed!: boolean;
  @ApiProperty({
    type: 'boolean',
  })
  require_identity_verify!: boolean;
  @ApiProperty({
    type: 'boolean',
  })
  require_document!: boolean;
  @ApiProperty({
    type: 'boolean',
  })
  is_internal_user!: boolean;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  record_status!: string | null;
  @ApiProperty({
    type: 'boolean',
    nullable: true,
  })
  require_office_verify!: boolean | null;
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
  created_by!: string | null;
}
