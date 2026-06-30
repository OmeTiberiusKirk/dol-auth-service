import { ApiProperty } from '@nestjs/swagger';
import { TbAccount } from './tbAccount.entity';
import { TbUser } from './tbUser.entity';
import { TbMsChannel } from './tbMsChannel.entity';
import { TbMsMethod } from './tbMsMethod.entity';

export class TbLogAccessSession {
  @ApiProperty({
    type: 'string',
  })
  session_id!: string;
  @ApiProperty({
    type: 'string',
  })
  account_id!: string;
  @ApiProperty({
    type: 'string',
  })
  user_id!: string;
  @ApiProperty({
    type: 'integer',
    format: 'int64',
    nullable: true,
  })
  login_method_id!: bigint | null;
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
  ip_address!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  device_id!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  kiosk_id!: string | null;
  @ApiProperty({
    type: 'string',
  })
  session_status!: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  started_at!: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  last_activity_at!: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  expired_at!: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  ended_at!: Date | null;
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
  updated_by!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  record_status!: string | null;
  @ApiProperty({
    type: () => TbAccount,
    required: false,
  })
  tb_account?: TbAccount;
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
  @ApiProperty({
    type: () => TbMsMethod,
    required: false,
    nullable: true,
  })
  tb_ms_method?: TbMsMethod | null;
}
