import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbLogAccessSessionDto {
  @ApiProperty({
    type: 'string',
  })
  session_id!: string;
}
