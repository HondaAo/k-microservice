import { Metadata } from 'grpc';
import { Observable } from 'rxjs';
import { EmployeeDTO } from './employees.dto';
import { Employee } from 'src/graphql/typings';

export interface IEmployeeService {
  findOne(data: { clientId: string; employeeId: number }): Observable<Employee>;
  find(data: { clientId: string }): Observable<Employee[]>;
  create(data: { clientId: string, input: EmployeeDTO }): Observable<Employee>;
  update(data: { clientId: string; employeeId: number; input: EmployeeDTO }): Observable<Employee>;
}
