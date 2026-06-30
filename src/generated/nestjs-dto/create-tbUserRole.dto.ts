import { ApiProperty } from '@nestjs/swagger';

export class CreateTbUserRoleDto {
  @ApiProperty({
    type: 'string',
  })
  request_group_code!: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  effective_to?: Date | null;
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
