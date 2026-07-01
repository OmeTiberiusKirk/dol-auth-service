import { TbAccount } from './tbAccount.entity';
import { TbHisFailedLogin } from './tbHisFailedLogin.entity';
import { TbLogAccessSession } from './tbLogAccessSession.entity';
import { TbRegistAttach } from './tbRegistAttach.entity';
import { TbUser } from './tbUser.entity';
import { TbUserConsent } from './tbUserConsent.entity';

export class TbMsChannel {
  channel_id!: bigint;
  channel_code!: string;
  channel_name!: string;
  description!: string | null;
  is_active!: boolean | null;
  display_order!: number | null;
  created_at!: Date;
  created_by!: string | null;
  updated_at!: Date | null;
  update_by!: string | null;
  record_status!: string | null;
  tb_account?: TbAccount[];
  tb_his_failed_login?: TbHisFailedLogin[];
  tb_log_access_session?: TbLogAccessSession[];
  tb_regist_attach?: TbRegistAttach[];
  tb_user?: TbUser[];
  tb_user_consent?: TbUserConsent[];
}
