import { Observable } from "rxjs";
import { Client } from "src/graphql/typings";
import { ClientDTO } from "./clients.dto";

export type UpdateClientInput = {
  clientId: string
  input: ClientDTO
}

export interface IClientService {
  findOne(data: { clientId: string}): Observable<Client>
  findByEmail(data: { email: string }): Observable<Client>
  find(data: { order: string, filter: string }): Observable<Client[]>
  create(data: { input: ClientDTO}): Observable<Client>
  update(data: { clientId: string, input: ClientDTO}): Observable<Client>
}