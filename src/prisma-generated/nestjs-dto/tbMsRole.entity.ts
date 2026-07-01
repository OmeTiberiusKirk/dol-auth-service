import { TbUserRole } from './tbUserRole.entity';

export class TbMsRole {
  role_id!: string;
  role_code!: string;
  role_name!: string;
  description!: string | null;
  is_system_role!: boolean;
  status!: string;
  created_at!: Date;
  updated_at!: Date | null;
  created_by!: string | null;
  update_by!: string | null;
  record_status!: string | null;
  tb_user_role?: TbUserRole[];
}
