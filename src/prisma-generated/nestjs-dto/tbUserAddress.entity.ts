import { TbUser } from './tbUser.entity';

export class TbUserAddress {
  user_address_id!: string;
  user_id!: string | null;
  address_type!: number | null;
  home_no!: string | null;
  moo!: string | null;
  alley!: string | null;
  soi!: string | null;
  road!: string | null;
  tambol_code!: number | null;
  tambol_name!: string | null;
  amphur_code!: number | null;
  amphur_name!: string | null;
  province_code!: number | null;
  province_name!: string | null;
  remark!: string | null;
  is_visible!: boolean | null;
  created_at!: Date;
  updated_at!: Date | null;
  update_by!: string | null;
  created_by!: string | null;
  record_status!: string | null;
  tb_user?: TbUser | null;
}
