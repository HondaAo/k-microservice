import { Inject, OnModuleInit } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PinoLogger } from 'nestjs-pino';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { IClientService } from './client.interface';
import { Client } from 'src/graphql/typings';

@Resolver('Client')
export class ClientsResolver implements OnModuleInit {
  constructor(
    @Inject('ClientsServiceClient')
    private readonly clientsServiceClient: ClientGrpcProxy,
    private readonly logger: PinoLogger
  ){
    logger.setContext(ClientsResolver.name)
  }

  private clientsService: IClientService;

  onModuleInit(): void {
    this.clientsService = this.clientsServiceClient.getService<IClientService>('ClientsService')
  }

  @Query('clients')
  async getClient(
    @Args('client_id') clientId: string
  ): Promise<Client> {
    return this.clientsService.findOne({ clientId }).toPromise()
  }

  @Query('clients')
  async getClients(
    @Args('filterBy') filterBy: any,
    @Args('orderBy') orderBy: string
  ): Promise<Client[]> {
   return this.clientsService.find({
    order: orderBy,
    filter: filterBy
   }).toPromise();
  }
}
