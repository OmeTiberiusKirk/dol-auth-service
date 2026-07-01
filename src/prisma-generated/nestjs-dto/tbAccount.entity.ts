import { TbUser } from './tbUser.entity';
import { TbMsChannel } from './tbMsChannel.entity';
import { TbHisFailedLogin } from './tbHisFailedLogin.entity';
import { TbLogAccessSession } from './tbLogAccessSession.entity';

export class TbAccount {
  account_id!: string;
  user_id!: string;
  username!: string | null;
  account_status!: string;
  last_login_at!: Date | null;
  last_login_channel_id!: bigint | null;
  password!: string | null;
  password_changed_at!: Date | null;
  password_expired_at!: Date | null;
  created_at!: Date;
  updated_at!: Date | null;
  created_by!: string;
  updated_by!: string | null;
  record_status!: string | null;
  tb_user?: TbUser;
  tb_ms_channel?: TbMsChannel | null;
  tb_his_failed_login?: TbHisFailedLogin[];
  tb_log_access_session?: TbLogAccessSession[];
}
