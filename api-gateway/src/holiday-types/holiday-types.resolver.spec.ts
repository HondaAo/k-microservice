import { Test, TestingModule } from '@nestjs/testing';
import { HolidayTypesResolver } from './holiday-types.resolver';

describe('HolidayTypesResolver', () => {
  let resolver: HolidayTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HolidayTypesResolver],
    }).compile();

    resolver = module.get<HolidayTypesResolver>(HolidayTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
