import { ApiProperty } from '@nestjs/swagger';

export class TbMsRoleDto {
  @ApiProperty({
    type: 'string',
  })
  role_id!: string;
  @ApiProperty({
    type: 'string',
  })
  role_code!: string;
  @ApiProperty({
    type: 'string',
  })
  role_name!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  description!: string | null;
  @ApiProperty({
    type: 'boolean',
  })
  is_system_role!: boolean;
  @ApiProperty({
    type: 'string',
  })
  status!: string;
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
  created_by!: string | null;
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
