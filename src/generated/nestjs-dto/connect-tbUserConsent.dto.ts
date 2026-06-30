import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbUserConsentDto {
  @ApiProperty({
    type: 'string',
  })
  consent_id!: string;
}
