export class TbMsAmphurAmphurIdProvinceIdUniqueInputDto {
  amphur_id!: string;
  province_id!: string;
}

export class ConnectTbMsAmphurDto {
  amphur_code?: string;
  amphur_id_province_id?: TbMsAmphurAmphurIdProvinceIdUniqueInputDto;
}
