import { Test, TestingModule } from '@nestjs/testing';
import { SummariesResolver } from './summaries.resolver';

describe('SummariesResolver', () => {
  let resolver: SummariesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummariesResolver],
    }).compile();

    resolver = module.get<SummariesResolver>(SummariesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
