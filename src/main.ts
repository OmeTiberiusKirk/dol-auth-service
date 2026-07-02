import { NestFactory } from '@nestjs/core';
import {
  MicroserviceOptions,
  RpcException,
  Transport,
} from '@nestjs/microservices';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: parseInt(process.env.AUTH_SERVICE_PORT ?? '4001', 10),
      },
    },
  );

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const message = errors.flatMap((error) =>
          Object.values(error.constraints ?? {}),
        );

        return new RpcException({
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'Bad Request',
          message,
        });
      },
    }),
  );

  await app.listen();
}

bootstrap().catch((e) => console.log(e));
