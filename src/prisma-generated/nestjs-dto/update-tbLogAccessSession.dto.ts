export class UpdateTbLogAccessSessionDto {
  ip_address?: string | null;
  device_id?: string | null;
  kiosk_id?: string | null;
  last_activity_at?: Date | null;
  expired_at?: Date | null;
  ended_at?: Date | null;
  created_by?: string;
  updated_at?: Date | null;
  updated_by?: string | null;
  record_status?: string | null;
}
