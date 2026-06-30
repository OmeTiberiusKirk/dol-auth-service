import { ApiProperty } from '@nestjs/swagger';

export class CreateTbLegalEntityRepresentDto {
  @ApiProperty({
    type: 'string',
  })
  legal_code!: string;
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
  user_legal_id?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  remark_legal?: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  effective_from?: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  effective_to?: Date | null;
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
  created_by?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  updated_by?: string | null;
}
