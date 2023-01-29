import { Observable } from 'rxjs';
import { EmployeeDTO } from './employees.dto';
import { Employee } from 'src/graphql/typings';
import { IQuery } from 'src/commons/commons.interface';

export interface IEmployeeService {
  findOne(data: { clientId: string; employeeId: number }): Observable<Employee>;
  find(data: { query: IQuery }): Observable<Employee[]>;
  create(data: { clientId: string, input: EmployeeDTO }): Observable<Employee>;
  update(data: { clientId: string; employeeId: number; input: EmployeeDTO }): Observable<Employee>;
}
