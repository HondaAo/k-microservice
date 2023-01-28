import { Inject, OnModuleInit, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PinoLogger } from 'nestjs-pino';
import { ClientGrpcProxy, ClientTCP } from '@nestjs/microservices';
import { IClientService } from './client.interface';
import { Client, ClientPayload } from 'src/graphql/typings';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentClient } from 'src/auth/client.decorator';
import { ClientDTO } from './clients.dto';

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

  @Query('client')
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

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async updateClient(@CurrentClient() client: Client, @Args('input') input: ClientDTO): Promise<Client> {
    const updatedClient = await this.clientsService.update({
        input,
        clientId: client.clientId
    }).toPromise()

    return updatedClient
  }

  @Query('me')
  @UseGuards(GqlAuthGuard)
  async me(@CurrentClient() client: Client): Promise<Client> {
    return this.clientsService.findOne({ clientId: client.clientId }).toPromise();
  }
}
