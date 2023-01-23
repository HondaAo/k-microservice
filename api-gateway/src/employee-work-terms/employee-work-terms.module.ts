import { Module } from '@nestjs/common';
import { EmployeeWorkTermsService } from './employee-work-terms.service';
import { EmployeeWorkTermsController } from './employee-work-terms.controller';

@Module({
  providers: [EmployeeWorkTermsService],
  controllers: [EmployeeWorkTermsController]
})
export class EmployeeWorkTermsModule {}
