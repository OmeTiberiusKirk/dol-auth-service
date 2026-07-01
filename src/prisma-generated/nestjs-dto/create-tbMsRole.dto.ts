export class CreateTbMsRoleDto {
  role_code!: string;
  role_name!: string;
  description?: string | null;
  updated_at?: Date | null;
  created_by?: string | null;
  update_by?: string | null;
  record_status?: string | null;
}
