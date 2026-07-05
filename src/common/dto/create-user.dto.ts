import { IntersectionType } from '@nestjs/mapped-types';
import { ConnectTbMsUserTypeDto } from 'src/prisma-generated/nestjs-dto/connect-tbMsUserType.dto';
import { CreateTbUserDto } from 'src/prisma-generated/nestjs-dto/create-tbUser.dto';
import { CreateTbUserAddressDto } from 'src/prisma-generated/nestjs-dto/create-tbUserAddress.dto';

class CreatePersonalDto extends IntersectionType(
  CreateTbUserDto,
  ConnectTbMsUserTypeDto,
) {}

export class CreateUserDto {
  personal!: CreatePersonalDto;
  address!: CreateTbUserAddressDto;
}
