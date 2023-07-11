import { Test, TestingModule } from '@nestjs/testing';
import { StuffsService } from './stuffs.service';

describe('StuffsService', () => {
  let service: StuffsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StuffsService],
    }).compile();

    service = module.get<StuffsService>(StuffsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
