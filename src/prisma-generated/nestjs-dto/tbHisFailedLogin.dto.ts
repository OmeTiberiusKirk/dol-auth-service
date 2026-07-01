export class TbHisFailedLoginDto {
  failed_login_id!: string;
  login_method_id!: bigint;
  username_input!: string;
  ip_address!: string | null;
  device_id!: string | null;
  failure_reason!: string | null;
  failed_at!: Date;
  created_at!: Date;
  created_by!: string;
  updated_at!: Date | null;
  update_by!: string | null;
  record_status!: string | null;
}
