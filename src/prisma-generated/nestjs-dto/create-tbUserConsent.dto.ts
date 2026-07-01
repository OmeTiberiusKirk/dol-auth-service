export class CreateTbUserConsentDto {
  consent_version?: string | null;
  consent_description?: string | null;
  is_accepted!: boolean;
  accepted_at?: Date | null;
  withdrawn_at?: Date | null;
  ip_address?: string | null;
  device_id?: string | null;
  created_by!: string;
  updated_at?: Date | null;
  update_by?: string | null;
  record_status?: string | null;
}
