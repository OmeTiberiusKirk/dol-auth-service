import { IsNotEmpty, IsObject } from 'class-validator';
import { CreatePersonalDto } from './create-personal.dto';
import { CreateAddressDto } from './create-address.dto';

export class CreateUserDto {
  @IsObject()
  @IsNotEmpty()
  personal!: CreatePersonalDto;

  @IsObject()
  @IsNotEmpty()
  address!: CreateAddressDto;
}
