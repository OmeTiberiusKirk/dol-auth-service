export class TbUserRoleDto {
  user_role_id!: string;
  request_group_code!: string;
  assigned_at!: Date;
  effective_from!: Date;
  effective_to!: Date | null;
  status!: string;
  created_at!: Date;
  created_by!: string;
  updated_at!: Date | null;
  update_by!: string | null;
  record_status!: string | null;
}
