export class TbUserRoleUserIdRequestGroupCodeEffectiveFromUniqueInputDto {
  user_id!: string;
  request_group_code!: string;
  effective_from!: Date;
}

export class ConnectTbUserRoleDto {
  user_role_id?: string;
  user_id_request_group_code_effective_from?: TbUserRoleUserIdRequestGroupCodeEffectiveFromUniqueInputDto;
}
