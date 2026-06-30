import { ApiProperty } from '@nestjs/swagger';
import { TbUser } from './tbUser.entity';
import { TbMsChannel } from './tbMsChannel.entity';
import { TbHisFailedLogin } from './tbHisFailedLogin.entity';
import { TbLogAccessSession } from './tbLogAccessSession.entity';

export class TbAccount {
  @ApiProperty({
    type: 'string',
  })
  account_id!: string;
  @ApiProperty({
    type: 'string',
  })
  user_id!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  username!: string | null;
  @ApiProperty({
    type: 'string',
  })
  account_status!: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  last_login_at!: Date | null;
  @ApiProperty({
    type: 'integer',
    format: 'int64',
    nullable: true,
  })
  last_login_channel_id!: bigint | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  password!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  password_changed_at!: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  password_expired_at!: Date | null;
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
  })
  created_by!: string;
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
    type: () => TbHisFailedLogin,
    isArray: true,
    required: false,
  })
  tb_his_failed_login?: TbHisFailedLogin[];
  @ApiProperty({
    type: () => TbLogAccessSession,
    isArray: true,
    required: false,
  })
  tb_log_access_session?: TbLogAccessSession[];
}
