import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationService } from './registration.service';
import { PrismaService } from 'src/prisma.service';

describe('RegistrationService', () => {
  let service: RegistrationService;

  // จำลอง Database หรือ Service อื่น
  const mockUsersRepository = {
    findOne: jest.fn().mockResolvedValue({ id: 1, name: 'John' }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrationService, PrismaService],
    }).compile();

    service = module.get<RegistrationService>(RegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //   it('should find a user by id', async () => {
  //     expect(await service.findOne(1)).toEqual({ id: 1, name: 'John' });
  //     expect(mockUsersRepository.findOne).toHaveBeenCalledWith(1);
  //   });
});
