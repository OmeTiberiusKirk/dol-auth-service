import { TbMsAmphur } from './tbMsAmphur.entity';

export class TbMsProvince {
  province_id!: string;
  province_name!: string;
  created_at!: Date;
  updated_at!: Date | null;
  update_by!: string | null;
  created_by!: string | null;
  record_status!: string | null;
  tb_ms_amphur?: TbMsAmphur[];
}
