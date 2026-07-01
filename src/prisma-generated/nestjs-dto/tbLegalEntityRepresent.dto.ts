export class TbLegalEntityRepresentDto {
  legal_represent_id!: string;
  legal_code!: string;
  legal_name!: string | null;
  user_legal_id!: string | null;
  remark_legal!: string | null;
  effective_from!: Date | null;
  effective_to!: Date | null;
  status!: string;
  created_at!: Date;
  updated_at!: Date | null;
  created_by!: string | null;
  updated_by!: string | null;
  record_status!: string;
}
