import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAddressDto {
  @IsOptional()
  @IsNumber()
  address_type?: number;

  @IsOptional()
  @IsString()
  home_no?: string;

  @IsOptional()
  @IsString()
  moo?: string;

  @IsOptional()
  @IsString()
  alley?: string;

  @IsOptional()
  @IsString()
  soi?: string;

  @IsOptional()
  @IsString()
  road?: string;

  @IsOptional()
  @IsNumber()
  tambol_code?: number;

  @IsOptional()
  @IsString()
  tambol_name?: string;

  @IsOptional()
  @IsNumber()
  amphur_code?: number;

  @IsOptional()
  @IsString()
  amphur_name?: string;

  @IsOptional()
  @IsNumber()
  province_code?: number;

  @IsOptional()
  @IsString()
  province_name?: string;

  @IsOptional()
  @IsString()
  remark?: string;

  @IsOptional()
  @IsBoolean()
  is_visible?: boolean;

  @IsOptional()
  @IsDate()
  updated_at?: Date;

  @IsOptional()
  @IsString()
  update_by?: string;

  @IsOptional()
  @IsString()
  created_by?: string;

  @IsOptional()
  @IsString()
  record_status?: string;

  constructor(data: CreateAddressDto) {
    Object.assign(this, data);
  }
}
