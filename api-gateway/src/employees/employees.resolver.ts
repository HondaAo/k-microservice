import { Inject, OnModuleInit, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { PinoLogger } from 'nestjs-pino';
import { Client, Employee, EmployeePayload } from 'src/graphql/typings';
import { IEmployeeService } from './employees.interface';
import { EmployeeDTO } from './employees.dto';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentClient } from 'src/auth/client.decorator';

@Resolver('User')
export class EmployeesResolver implements OnModuleInit {
  constructor(
    @Inject('EmployeesServiceClient')
    private readonly employeesServiceClient: ClientGrpcProxy,
    private readonly logger: PinoLogger
  ) {
    logger.setContext(EmployeesResolver.name)
  }

  private employeesService: IEmployeeService

  onModuleInit() {
    this.employeesService = this.employeesServiceClient.getService<IEmployeeService>('EmployeesService')
  }

  @Query('employee')
  async getEmployee(
    @Args('client_id') clientId: string,
    @Args('employee_id') employeeId: number
  ): Promise<Employee> {
    return this.employeesService.findOne({ clientId, employeeId }).toPromise()
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async createEmployee(
    @CurrentClient() client: Client,
    @Args('input') input: EmployeeDTO
  ): Promise<Employee> {
    const employee = this.employeesService.create({
        input,
        clientId: client.clientId
    }).toPromise()

    return employee
  }
}
