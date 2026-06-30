import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbMsRoleDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  role_id?: string;
  @ApiProperty({
    type: 'string',
    required: false,
  })
  role_code?: string;
}
