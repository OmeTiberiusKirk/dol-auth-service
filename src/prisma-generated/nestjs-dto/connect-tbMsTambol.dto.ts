export class TbMsTambolTambolIdAmphurIdProvinceIdUniqueInputDto {
  tambol_id!: string;
  amphur_id!: string;
  province_id!: string;
}

export class ConnectTbMsTambolDto {
  tambol_code?: string;
  tambol_id_amphur_id_province_id?: TbMsTambolTambolIdAmphurIdProvinceIdUniqueInputDto;
}
