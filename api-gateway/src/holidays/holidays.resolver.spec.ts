import { Test, TestingModule } from '@nestjs/testing';
import { HolidaysResolver } from './holidays.resolver';

describe('HolidaysResolver', () => {
  let resolver: HolidaysResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HolidaysResolver],
    }).compile();

    resolver = module.get<HolidaysResolver>(HolidaysResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
