import { ApiProperty } from '@nestjs/swagger';
import { TbAccount } from './tbAccount.entity';
import { TbHisFailedLogin } from './tbHisFailedLogin.entity';
import { TbLogAccessSession } from './tbLogAccessSession.entity';
import { TbRegistAttach } from './tbRegistAttach.entity';
import { TbUser } from './tbUser.entity';
import { TbUserConsent } from './tbUserConsent.entity';

export class TbMsChannel {
  @ApiProperty({
    type: 'integer',
    format: 'int64',
  })
  channel_id!: bigint;
  @ApiProperty({
    type: 'string',
  })
  channel_code!: string;
  @ApiProperty({
    type: 'string',
  })
  channel_name!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  description!: string | null;
  @ApiProperty({
    type: 'boolean',
    nullable: true,
  })
  is_active!: boolean | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  display_order!: number | null;
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
    type: () => TbAccount,
    isArray: true,
    required: false,
  })
  tb_account?: TbAccount[];
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
  @ApiProperty({
    type: () => TbRegistAttach,
    isArray: true,
    required: false,
  })
  tb_regist_attach?: TbRegistAttach[];
  @ApiProperty({
    type: () => TbUser,
    isArray: true,
    required: false,
  })
  tb_user?: TbUser[];
  @ApiProperty({
    type: () => TbUserConsent,
    isArray: true,
    required: false,
  })
  tb_user_consent?: TbUserConsent[];
}
