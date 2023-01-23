import { Inject, Module } from '@nestjs/common';
import { EmployeesResolver } from './employees.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [LoggerModule, ConfigModule],
  providers: [
    EmployeesResolver,
  ]
})
export class EmployeesModule {}
