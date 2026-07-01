import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegistrationService } from './registration.service';

@Controller()
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @MessagePattern('REG001')
  async handleReg001(@Payload() data: unknown): Promise<string> {
    await this.registrationService.createUser(data);

    return (
      'REG001 — User Registration Service: ' +
      'Accepts user credentials, validates field constraints and uniqueness, ' +
      'creates a new account record, and issues an email confirmation token.'
    );
  }
}
