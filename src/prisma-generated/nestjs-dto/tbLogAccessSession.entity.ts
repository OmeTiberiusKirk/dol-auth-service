import { TbAccount } from './tbAccount.entity';
import { TbUser } from './tbUser.entity';
import { TbMsChannel } from './tbMsChannel.entity';
import { TbMsMethod } from './tbMsMethod.entity';

export class TbLogAccessSession {
  session_id!: string;
  account_id!: string;
  user_id!: string;
  login_method_id!: bigint | null;
  channel_id!: bigint | null;
  ip_address!: string | null;
  device_id!: string | null;
  kiosk_id!: string | null;
  session_status!: string;
  started_at!: Date;
  last_activity_at!: Date | null;
  expired_at!: Date | null;
  ended_at!: Date | null;
  created_at!: Date;
  created_by!: string;
  updated_at!: Date | null;
  updated_by!: string | null;
  record_status!: string | null;
  tb_account?: TbAccount;
  tb_user?: TbUser;
  tb_ms_channel?: TbMsChannel | null;
  tb_ms_method?: TbMsMethod | null;
}
