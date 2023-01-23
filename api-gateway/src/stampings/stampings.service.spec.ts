import { Test, TestingModule } from '@nestjs/testing';
import { StampingsService } from './stampings.service';

describe('StampingsService', () => {
  let service: StampingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StampingsService],
    }).compile();

    service = module.get<StampingsService>(StampingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
