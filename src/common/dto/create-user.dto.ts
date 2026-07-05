import { CreatePersonalDto } from './create-personal.dto';
import { CreateAddressDto } from './create-address.dto';

export class CreateUserDto {
  personal!: CreatePersonalDto;
  address!: CreateAddressDto;
}
