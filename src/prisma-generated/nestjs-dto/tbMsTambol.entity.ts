import { TbMsAmphur } from './tbMsAmphur.entity';

export class TbMsTambol {
  tambol_id!: string;
  tambol_name!: string;
  amphur_id!: string;
  amphur_name!: string;
  province_id!: string;
  province_name!: string;
  created_at!: Date;
  updated_at!: Date | null;
  update_by!: string | null;
  created_by!: string | null;
  record_status!: string | null;
  tambol_code!: string;
  amphur_code!: string | null;
  tb_ms_amphur?: TbMsAmphur;
}
