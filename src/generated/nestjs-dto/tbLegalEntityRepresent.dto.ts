import { ApiProperty } from '@nestjs/swagger';

export class TbLegalEntityRepresentDto {
  @ApiProperty({
    type: 'string',
  })
  legal_represent_id!: string;
  @ApiProperty({
    type: 'string',
  })
  legal_code!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  legal_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  user_legal_id!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  remark_legal!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  effective_from!: Date | null;
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
  updated_by!: string | null;
  @ApiProperty({
    type: 'string',
  })
  record_status!: string;
}
