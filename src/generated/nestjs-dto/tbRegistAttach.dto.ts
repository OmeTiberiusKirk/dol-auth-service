import { ApiProperty } from '@nestjs/swagger';

export class TbRegistAttachDto {
  @ApiProperty({
    type: 'string',
  })
  regist_doc_att_id!: string;
  @ApiProperty({
    type: 'string',
  })
  doc_name!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  file_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  file_path!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  file_hash!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  mime_type!: string | null;
  @ApiProperty({
    type: 'integer',
    format: 'int64',
    nullable: true,
  })
  file_size!: bigint | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  upload_seq!: number | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  remark!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  uploaded_by!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  uploaded_at!: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at!: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updated_at!: Date;
  @ApiProperty({
    type: 'string',
  })
  created_by!: string;
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
