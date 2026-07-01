export class TbUserVerfityUserVerifyIdUserIdUniqueInputDto {
  user_verify_id!: string;
  user_id!: string;
}

export class ConnectTbUserVerfityDto {
  user_verify_id?: string;
  user_verify_id_user_id?: TbUserVerfityUserVerifyIdUserIdUniqueInputDto;
}
