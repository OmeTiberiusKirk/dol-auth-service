import { ApiProperty } from '@nestjs/swagger';
import { TbLogAccessSession } from './tbLogAccessSession.entity';

export class TbMsMethod {
  @ApiProperty({
    type: 'integer',
    format: 'int64',
  })
  method_id!: bigint;
  @ApiProperty({
    type: 'string',
  })
  method_code!: string;
  @ApiProperty({
    type: 'string',
  })
  method_name!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  description!: string | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  display_order!: number | null;
  @ApiProperty({
    type: 'boolean',
    nullable: true,
  })
  is_enable!: boolean | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at!: Date;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  created_by!: string | null;
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
  @ApiProperty({
    type: () => TbLogAccessSession,
    isArray: true,
    required: false,
  })
  tb_log_access_session?: TbLogAccessSession[];
}
