import { Inject, OnModuleInit, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { PinoLogger } from 'nestjs-pino';
import { Client, Employee } from 'src/graphql/typings';
import { IEmployeeService } from './employees.interface';
import { EmployeeDTO } from './employees.dto';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentClient } from 'src/auth/client.decorator';
import { QueryUtils } from 'src/utils/query.util';
import { isEmpty, merge } from 'lodash';
import { IQuery } from 'src/commons/commons.interface';

@Resolver('User')
export class EmployeesResolver implements OnModuleInit {
  constructor(
    @Inject('EmployeesServiceClient')
    private readonly employeesServiceClient: ClientGrpcProxy,
    private readonly queryUtil: QueryUtils,
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

  @Query('employees')
  async getEmployees(
    @Args('q') q: string,
    @Args('offset') offset: number,
    @Args('limit') limit: number,
    @Args('filterBy') filterBy: any,
    @Args('orderBy') orderBy: string
  ): Promise<Employee[]> {
    const query: IQuery = { where: {} }

    if (!isEmpty(q)) merge(query, { where: { name: { _iLike: q } } })

    merge(query, this.queryUtil.queryBuilder(filterBy, orderBy, limit, offset));

    const employees = await this.employeesService.find({
      query: query,
    }).toPromise();

    return employees;
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
