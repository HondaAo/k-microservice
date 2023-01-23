import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeWorkTermsService } from './employee-work-terms.service';

describe('EmployeeWorkTermsService', () => {
  let service: EmployeeWorkTermsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeWorkTermsService],
    }).compile();

    service = module.get<EmployeeWorkTermsService>(EmployeeWorkTermsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
