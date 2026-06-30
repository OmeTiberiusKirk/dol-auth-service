import { ApiProperty } from '@nestjs/swagger';

export class UpdateTbRegistAttachDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  doc_name?: string;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  file_name?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  file_path?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  file_hash?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  mime_type?: string | null;
  @ApiProperty({
    type: 'integer',
    format: 'int64',
    required: false,
    nullable: true,
  })
  file_size?: bigint | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
    nullable: true,
  })
  upload_seq?: number | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  remark?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
    nullable: true,
  })
  uploaded_by?: string | null;
  @ApiProperty({
    type: 'string',
    required: false,
  })
  created_by?: string;
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
