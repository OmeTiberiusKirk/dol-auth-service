import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegistrationService } from './registration.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @MessagePattern('REG001')
  async handleReg001(@Payload() data: CreateUserDto): Promise<string> {
    return this.registrationService.createUser(data);
  }
}
