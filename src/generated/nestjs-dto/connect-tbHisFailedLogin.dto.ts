import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbHisFailedLoginDto {
  @ApiProperty({
    type: 'string',
  })
  failed_login_id!: string;
}
