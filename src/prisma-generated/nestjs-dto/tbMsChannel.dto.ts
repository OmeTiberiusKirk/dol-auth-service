export class TbMsChannelDto {
  channel_id!: bigint;
  channel_code!: string;
  channel_name!: string;
  description!: string | null;
  is_active!: boolean | null;
  display_order!: number | null;
  created_at!: Date;
  created_by!: string | null;
  updated_at!: Date | null;
  update_by!: string | null;
  record_status!: string | null;
}
