import { ApiProperty } from '@nestjs/swagger';
import { TbUser } from './tbUser.entity';
import { TbMsChannel } from './tbMsChannel.entity';

export class TbUserConsent {
  @ApiProperty({
    type: 'string',
  })
  consent_id!: string;
  @ApiProperty({
    type: 'string',
  })
  user_id!: string;
  @ApiProperty({
    type: 'integer',
    format: 'int64',
    nullable: true,
  })
  channel_id!: bigint | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  consent_version!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  consent_description!: string | null;
  @ApiProperty({
    type: 'boolean',
  })
  is_accepted!: boolean;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  accepted_at!: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  withdrawn_at!: Date | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  ip_address!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  device_id!: string | null;
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
  @ApiProperty({
    type: () => TbUser,
    required: false,
  })
  tb_user?: TbUser;
  @ApiProperty({
    type: () => TbMsChannel,
    required: false,
    nullable: true,
  })
  tb_ms_channel?: TbMsChannel | null;
}
