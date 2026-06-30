import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class RegistrationController {
  @MessagePattern('REG001')
  handleReg001(@Payload() _data: unknown): string {
    return (
      'REG001 — User Registration Service: ' +
      'Accepts user credentials, validates field constraints and uniqueness, ' +
      'creates a new account record, and issues an email confirmation token.'
    );
  }
}
