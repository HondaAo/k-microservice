import { Test, TestingModule } from '@nestjs/testing';
import { StampingsResolver } from './stampings.resolver';

describe('StampingsResolver', () => {
  let resolver: StampingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StampingsResolver],
    }).compile();

    resolver = module.get<StampingsResolver>(StampingsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
