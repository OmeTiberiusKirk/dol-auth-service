import { ApiProperty } from '@nestjs/swagger';

export class ConnectTbRegistAttachDto {
  @ApiProperty({
    type: 'string',
  })
  regist_doc_att_id!: string;
}
