export class TbRegistAttachDto {
  regist_doc_att_id!: string;
  doc_name!: string;
  file_name!: string | null;
  file_path!: string | null;
  file_hash!: string | null;
  mime_type!: string | null;
  file_size!: bigint | null;
  upload_seq!: number | null;
  remark!: string | null;
  uploaded_by!: string | null;
  uploaded_at!: Date;
  created_at!: Date;
  updated_at!: Date;
  created_by!: string;
  update_by!: string | null;
  record_status!: string | null;
}
