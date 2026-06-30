import { ApiProperty } from '@nestjs/swagger';

export class TbUserRoleDto {
  @ApiProperty({
    type: 'string',
  })
  user_role_id!: string;
  @ApiProperty({
    type: 'string',
  })
  request_group_code!: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  assigned_at!: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  effective_from!: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  effective_to!: Date | null;
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
