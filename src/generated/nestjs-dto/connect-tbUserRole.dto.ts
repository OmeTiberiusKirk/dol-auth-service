import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class TbUserRoleUserIdRequestGroupCodeEffectiveFromUniqueInputDto {
  @ApiProperty({
    type: 'string',
  })
  user_id!: string;
  @ApiProperty({
    type: 'string',
  })
  request_group_code!: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
  })
  effective_from!: Date;
}

@ApiExtraModels(TbUserRoleUserIdRequestGroupCodeEffectiveFromUniqueInputDto)
export class ConnectTbUserRoleDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  user_role_id?: string;
  @ApiProperty({
    type: TbUserRoleUserIdRequestGroupCodeEffectiveFromUniqueInputDto,
    required: false,
  })
  user_id_request_group_code_effective_from?: TbUserRoleUserIdRequestGroupCodeEffectiveFromUniqueInputDto;
}
