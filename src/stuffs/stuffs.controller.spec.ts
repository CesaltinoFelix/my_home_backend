import { Test, TestingModule } from '@nestjs/testing';
import { StuffsController } from './stuffs.controller';
import { StuffsService } from './stuffs.service';

describe('StuffsController', () => {
  let controller: StuffsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StuffsController],
      providers: [StuffsService],
    }).compile();

    controller = module.get<StuffsController>(StuffsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
