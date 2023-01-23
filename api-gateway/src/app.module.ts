import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesService } from './employees/employees.service';
import { EmployeesModule } from './employees/employees.module';
import { ShiftsModule } from './shifts/shifts.module';
import { StampingsModule } from './stampings/stampings.module';
import { ClientsModule } from './clients/clients.module';
import { SummariesModule } from './summaries/summaries.module';
import { HolidayTypesModule } from './holiday-types/holiday-types.module';
import { EmployeeWorkTermsModule } from './employee-work-terms/employee-work-terms.module';

@Module({
  imports: [
    EmployeesModule,
    ShiftsModule,
    StampingsModule,
    ClientsModule,
    SummariesModule,
    HolidayTypesModule,
    EmployeeWorkTermsModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmployeesService],
})
export class AppModule {}
