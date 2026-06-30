import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbUserDto {
  @ApiProperty({
    type: 'string',
  })
  user_id!: string;
}
