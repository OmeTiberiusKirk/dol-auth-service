import { ApiProperty } from '@nestjs/swagger';
import { TbAccount } from './tbAccount.entity';
import { TbLegalEntityRepresent } from './tbLegalEntityRepresent.entity';
import { TbLogAccessSession } from './tbLogAccessSession.entity';
import { TbRegistAttach } from './tbRegistAttach.entity';
import { TbMsChannel } from './tbMsChannel.entity';
import { TbMsUserType } from './tbMsUserType.entity';
import { TbUserConsent } from './tbUserConsent.entity';
import { TbUserRole } from './tbUserRole.entity';

export class TbUser {
  @ApiProperty({
    type: 'string',
  })
  user_id!: string;
  @ApiProperty({
    type: 'integer',
    format: 'int64',
  })
  user_type_id!: bigint;
  @ApiProperty({
    type: 'integer',
    format: 'int64',
    nullable: true,
  })
  register_channel_id!: bigint | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  person_id!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  title!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  given_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  middle_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  family_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  title_en!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  given_name_en!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  middle_name_en!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  family_name_en!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  birth_date!: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  date_of_expiry!: Date | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  ial_level!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  legal_code!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  legal_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  land_office_id!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  land_office_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  land_office_position!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  private_office_id!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  private_office_name!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  email!: string | null;
  @ApiProperty({
    type: 'boolean',
    nullable: true,
  })
  is_email_verified!: boolean | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  mobile_no!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  verfity_at!: Date | null;
  @ApiProperty({
    type: 'boolean',
    nullable: true,
  })
  is_verify!: boolean | null;
  @ApiProperty({
    type: 'string',
  })
  user_status!: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at!: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  updated_at!: Date | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  update_by!: string | null;
  @ApiProperty({
    type: 'string',
  })
  created_by!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  record_status!: string | null;
  @ApiProperty({
    type: () => TbAccount,
    isArray: true,
    required: false,
  })
  tb_account?: TbAccount[];
  @ApiProperty({
    type: () => TbLegalEntityRepresent,
    isArray: true,
    required: false,
  })
  tb_legal_entity_represent?: TbLegalEntityRepresent[];
  @ApiProperty({
    type: () => TbLogAccessSession,
    isArray: true,
    required: false,
  })
  tb_log_access_session?: TbLogAccessSession[];
  @ApiProperty({
    type: () => TbRegistAttach,
    isArray: true,
    required: false,
  })
  tb_regist_attach?: TbRegistAttach[];
  @ApiProperty({
    type: () => TbMsChannel,
    required: false,
    nullable: true,
  })
  tb_ms_channel?: TbMsChannel | null;
  @ApiProperty({
    type: () => TbMsUserType,
  })
  tb_ms_user_type!: TbMsUserType;
  @ApiProperty({
    type: () => TbUserConsent,
    isArray: true,
    required: false,
  })
  tb_user_consent?: TbUserConsent[];
  @ApiProperty({
    type: () => TbUserRole,
    isArray: true,
    required: false,
  })
  tb_user_role_tb_user_role_assigned_byTotb_user?: TbUserRole[];
  @ApiProperty({
    type: () => TbUserRole,
    isArray: true,
    required: false,
  })
  tb_user_role_tb_user_role_user_idTotb_user?: TbUserRole[];
}
