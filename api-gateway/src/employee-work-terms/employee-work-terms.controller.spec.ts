import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeWorkTermsController } from './employee-work-terms.controller';

describe('EmployeeWorkTermsController', () => {
  let controller: EmployeeWorkTermsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeWorkTermsController],
    }).compile();

    controller = module.get<EmployeeWorkTermsController>(EmployeeWorkTermsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
