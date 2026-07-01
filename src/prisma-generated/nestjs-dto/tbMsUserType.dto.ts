export class TbMsUserTypeDto {
  user_type_id!: bigint;
  user_type_code!: string;
  user_type_name!: string;
  description!: string | null;
  default_role_code!: string | null;
  registration_allowed!: boolean;
  login_allowed!: boolean;
  require_identity_verify!: boolean;
  require_document!: boolean;
  is_internal_user!: boolean;
  record_status!: string | null;
  require_office_verify!: boolean | null;
  display_order!: number | null;
  created_at!: Date;
  updated_at!: Date | null;
  update_by!: string | null;
  created_by!: string | null;
}
