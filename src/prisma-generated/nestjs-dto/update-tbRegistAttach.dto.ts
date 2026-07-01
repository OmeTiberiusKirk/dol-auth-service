export class UpdateTbRegistAttachDto {
  doc_name?: string;
  file_name?: string | null;
  file_path?: string | null;
  file_hash?: string | null;
  mime_type?: string | null;
  file_size?: bigint | null;
  upload_seq?: number | null;
  remark?: string | null;
  uploaded_by?: string | null;
  created_by?: string;
  update_by?: string | null;
  record_status?: string | null;
}
