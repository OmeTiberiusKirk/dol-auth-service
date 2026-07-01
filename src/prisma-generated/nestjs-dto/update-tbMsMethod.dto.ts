export class UpdateTbMsMethodDto {
  method_code?: string;
  method_name?: string;
  description?: string | null;
  display_order?: number | null;
  is_enable?: boolean | null;
  created_by?: string | null;
  updated_at?: Date | null;
  update_by?: string | null;
  record_status?: string | null;
}
