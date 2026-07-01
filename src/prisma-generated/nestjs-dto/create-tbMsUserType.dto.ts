export class CreateTbMsUserTypeDto {
  user_type_code!: string;
  user_type_name!: string;
  description?: string | null;
  default_role_code?: string | null;
  record_status?: string | null;
  require_office_verify?: boolean | null;
  display_order?: number | null;
  updated_at?: Date | null;
  update_by?: string | null;
  created_by?: string | null;
}
