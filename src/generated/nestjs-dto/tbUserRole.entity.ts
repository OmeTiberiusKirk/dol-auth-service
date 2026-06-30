import { ApiProperty } from '@nestjs/swagger';
import { TbUser } from './tbUser.entity';
import { TbMsRole } from './tbMsRole.entity';

export class TbUserRole {
  @ApiProperty({
    type: 'string',
  })
  user_role_id!: string;
  @ApiProperty({
    type: 'string',
  })
  user_id!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  role_id!: string | null;
  @ApiProperty({
    type: 'string',
  })
  request_group_code!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  assigned_by!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  assigned_at!: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  effective_from!: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  effective_to!: Date | null;
  @ApiProperty({
    type: 'string',
  })
  status!: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at!: Date;
  @ApiProperty({
    type: 'string',
  })
  created_by!: string;
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
    nullable: true,
  })
  record_status!: string | null;
  @ApiProperty({
    type: () => TbUser,
    required: false,
    nullable: true,
  })
  tb_user_tb_user_role_assigned_byTotb_user?: TbUser | null;
  @ApiProperty({
    type: () => TbUser,
    required: false,
  })
  tb_user_tb_user_role_user_idTotb_user?: TbUser;
  @ApiProperty({
    type: () => TbMsRole,
    required: false,
    nullable: true,
  })
  tb_ms_role?: TbMsRole | null;
}
