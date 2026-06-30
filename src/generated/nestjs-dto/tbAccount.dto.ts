import { ApiProperty } from '@nestjs/swagger';

export class TbAccountDto {
  @ApiProperty({
    type: 'string',
  })
  account_id!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  username!: string | null;
  @ApiProperty({
    type: 'string',
  })
  account_status!: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  last_login_at!: Date | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  password!: string | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  password_changed_at!: Date | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    nullable: true,
  })
  password_expired_at!: Date | null;
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
  })
  created_by!: string;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  updated_by!: string | null;
  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  record_status!: string | null;
}
