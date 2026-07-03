export class UpdateTbMsTambolDto {
  tambol_id?: string;
  tambol_name?: string;
  amphur_id?: string;
  amphur_name?: string;
  province_id?: string;
  province_name?: string;
  updated_at?: Date | null;
  update_by?: string | null;
  created_by?: string | null;
  record_status?: string | null;
  amphur_code?: string | null;
}
