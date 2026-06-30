import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbLegalEntityRepresentDto {
  @ApiProperty({
    type: 'string',
  })
  legal_represent_id!: string;
}
