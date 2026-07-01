import { TbUser } from './tbUser.entity';

export class TbUserVerfity {
  user_verify_id!: string;
  user_id!: string;
  verify_flag!: string | null;
  verify_by!: string | null;
  verify_at!: Date | null;
  verify_desc!: string | null;
  created_at!: Date;
  updated_at!: Date | null;
  update_by!: string | null;
  created_by!: string;
  record_status!: string | null;
  tb_user?: TbUser;
}
