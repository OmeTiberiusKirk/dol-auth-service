import { ApiProperty } from '@nestjs/swagger';

export class UpdateTbMsMethodDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  method_code?: string;
  @ApiProperty({
    type: 'string',
    required: false,
  })
  method_name?: string;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  description?: string | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
    nullable: true,
  })
  display_order?: number | null;
  @ApiProperty({
    type: 'boolean',
    required: false,
    nullable: true,
  })
  is_enable?: boolean | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  created_by?: string | null;
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
