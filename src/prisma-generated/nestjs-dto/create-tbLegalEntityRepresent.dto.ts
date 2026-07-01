export class CreateTbLegalEntityRepresentDto {
  legal_code!: string;
  legal_name?: string | null;
  user_legal_id?: string | null;
  remark_legal?: string | null;
  effective_from?: Date | null;
  effective_to?: Date | null;
  updated_at?: Date | null;
  created_by?: string | null;
  updated_by?: string | null;
}
