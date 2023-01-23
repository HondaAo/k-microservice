import { Test, TestingModule } from '@nestjs/testing';
import { HolidayTypesService } from './holiday-types.service';

describe('HolidayTypesService', () => {
  let service: HolidayTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HolidayTypesService],
    }).compile();

    service = module.get<HolidayTypesService>(HolidayTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
