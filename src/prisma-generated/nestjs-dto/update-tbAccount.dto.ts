export class UpdateTbAccountDto {
  username?: string | null;
  last_login_at?: Date | null;
  password?: string | null;
  password_changed_at?: Date | null;
  password_expired_at?: Date | null;
  updated_at?: Date | null;
  created_by?: string;
  updated_by?: string | null;
  record_status?: string | null;
}
