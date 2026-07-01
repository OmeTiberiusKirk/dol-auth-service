import { TbUser } from './tbUser.entity';
import { TbMsRole } from './tbMsRole.entity';

export class TbUserRole {
  user_role_id!: string;
  user_id!: string;
  role_id!: string | null;
  request_group_code!: string;
  assigned_by!: string | null;
  assigned_at!: Date;
  effective_from!: Date;
  effective_to!: Date | null;
  status!: string;
  created_at!: Date;
  created_by!: string;
  updated_at!: Date | null;
  update_by!: string | null;
  record_status!: string | null;
  tb_user_tb_user_role_assigned_byTotb_user?: TbUser | null;
  tb_user_tb_user_role_user_idTotb_user?: TbUser;
  tb_ms_role?: TbMsRole | null;
}
