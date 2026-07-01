import { TbAccount } from './tbAccount.entity';
import { TbMsChannel } from './tbMsChannel.entity';

export class TbHisFailedLogin {
  failed_login_id!: string;
  account_id!: string;
  channel_id!: bigint | null;
  login_method_id!: bigint;
  username_input!: string;
  ip_address!: string | null;
  device_id!: string | null;
  failure_reason!: string | null;
  failed_at!: Date;
  created_at!: Date;
  created_by!: string;
  updated_at!: Date | null;
  update_by!: string | null;
  record_status!: string | null;
  tb_account?: TbAccount;
  tb_ms_channel?: TbMsChannel | null;
}
