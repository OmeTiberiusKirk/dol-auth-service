import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { RegistrationService } from './registration.service';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

// Replaced with a bare factory so the real PrismaService (and the
// generated Prisma client it pulls in) is never loaded in this suite.
jest.mock('src/prisma.service', () => ({
  PrismaService: jest.fn(),
}));

type PrismaMock = {
  tb_user: {
    create: jest.Mock;
  };
};

describe('RegistrationService', () => {
  let service: RegistrationService;
  let prisma: PrismaMock;

  // A payload that satisfies every decorator on PersonalDto.
  const validPersonal = {
    person_id: '1234567890123',
    title: 'Mr.',
    given_name: 'John',
    family_name: 'Doe',
    birth_date: '1990-01-01',
    date_of_expiry: '2030-01-01',
    email: 'john.doe@example.com',
    mobile_no: '0812345678',
    user_type_id: 1,
    created_by: '123e4567-e89b-12d3-a456-426614174000',
  };

  const buildDto = (personalOverrides: Record<string, unknown> = {}) =>
    ({
      personal: { ...validPersonal, ...personalOverrides },
      address: {},
    }) as unknown as CreateUserDto;

  beforeEach(async () => {
    prisma = {
      tb_user: {
        create: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegistrationService,
        { provide: PrismaService, useValue: prisma },
      ],
    }).compile();

    service = module.get<RegistrationService>(RegistrationService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    describe('happy path', () => {
      it('validates the payload, persists the user via prisma, and returns the success message', async () => {
        // Arrange
        prisma.tb_user.create.mockResolvedValue({
          user_id: 'generated-uuid',
          ...validPersonal,
        });
        const dto = buildDto();

        // Act
        const result = await service.createUser(dto);

        // Assert
        expect(prisma.tb_user.create).toHaveBeenCalledTimes(1);
        expect(prisma.tb_user.create).toHaveBeenCalledWith({
          data: expect.objectContaining({
            person_id: validPersonal.person_id,
            given_name: validPersonal.given_name,
            family_name: validPersonal.family_name,
            email: validPersonal.email,
            mobile_no: validPersonal.mobile_no,
          }),
        });
        expect(result).toBe('User registered successfully');
      });
    });

    describe('validation failure', () => {
      it('throws an RpcException and never calls prisma when required fields are missing', async () => {
        // Arrange
        const dto = buildDto({ given_name: undefined, email: undefined });

        // Act & Assert
        await expect(service.createUser(dto)).rejects.toBeInstanceOf(
          RpcException,
        );
        expect(prisma.tb_user.create).not.toHaveBeenCalled();
      });

      it('throws an RpcException carrying a 400 Bad Request payload with constraint messages when a field is malformed', async () => {
        // Arrange
        expect.assertions(5);
        const dto = buildDto({ email: 'not-an-email' });

        // Act
        try {
          await service.createUser(dto);
        } catch (err) {
          // Assert
          expect(err).toBeInstanceOf(RpcException);
          const error = (err as RpcException).getError() as {
            statusCode: number;
            error: string;
            message: string[];
          };
          expect(error.statusCode).toBe(HttpStatus.BAD_REQUEST);
          expect(error.error).toBe('Bad Request');
          expect(Array.isArray(error.message)).toBe(true);
          expect(error.message.length).toBeGreaterThan(0);
        }
      });

      it('does not call prisma.tb_user.create when validation fails', async () => {
        // Arrange
        const dto = buildDto({ mobile_no: 'not-a-phone-number' });

        // Act
        await expect(service.createUser(dto)).rejects.toBeInstanceOf(
          RpcException,
        );

        // Assert
        expect(prisma.tb_user.create).not.toHaveBeenCalled();
      });
    });

    describe('database failure', () => {
      it('propagates the error when prisma.tb_user.create rejects, instead of swallowing it', async () => {
        // Arrange
        const dbError = new Error('connection terminated unexpectedly');
        prisma.tb_user.create.mockRejectedValue(dbError);
        const dto = buildDto();

        // Act & Assert
        await expect(service.createUser(dto)).rejects.toThrow(dbError);
        expect(prisma.tb_user.create).toHaveBeenCalledTimes(1);
      });
    });
  });
});
