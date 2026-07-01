import { TbUser } from './tbUser.entity';
import { TbMsChannel } from './tbMsChannel.entity';

export class TbUserConsent {
  consent_id!: string;
  user_id!: string;
  channel_id!: bigint | null;
  consent_version!: string | null;
  consent_description!: string | null;
  is_accepted!: boolean;
  accepted_at!: Date | null;
  withdrawn_at!: Date | null;
  ip_address!: string | null;
  device_id!: string | null;
  created_at!: Date;
  created_by!: string;
  updated_at!: Date | null;
  update_by!: string | null;
  record_status!: string | null;
  tb_user?: TbUser;
  tb_ms_channel?: TbMsChannel | null;
}
