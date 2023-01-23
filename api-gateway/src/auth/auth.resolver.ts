import { Inject, OnModuleInit, UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { ClientGrpcProxy } from "@nestjs/microservices";
import { PinoLogger } from "nestjs-pino";
import { IClientService } from "src/clients/client.interface";
import { ClientDTO } from "src/clients/clients.dto";
import { Client, ClientPayload, LoginClientInput } from "src/graphql/typings";
import { PasswordUtils } from "src/utils/password.util";
import { AuthService } from "./auth.service";
import { isEmpty } from "lodash";
import { RefreshAuthGuard } from "./refresh-auth.guard";
import { CurrentClient } from "./client.decorator";

@Resolver()
export class AuthResolver implements OnModuleInit {
  constructor(
    @Inject('ClientsServiceClient')
    private readonly clientsServiceClient: ClientGrpcProxy,
    private readonly authService: AuthService,
    private readonly passwordUtils: PasswordUtils,
    private readonly logger: PinoLogger
  ) {
    logger.setContext(AuthResolver.name)
  }

  private clientsService: IClientService
  onModuleInit() {
    this.clientsService = this.clientsServiceClient.getService<IClientService>('ClientsService')
  }

  @Mutation()
  async signupClient(
    @Args('input') input: ClientDTO
  ): Promise<ClientPayload> {
    const existsClient = await this.clientsService.findByEmail({
        email: input.email
    }).toPromise()
    if (existsClient) throw new Error('Email taken')

    const newPassword = this.passwordUtils.hash(input.password)
    const client = await this.clientsService.create({
        input: {
            password: newPassword,
            ...input
        }
    }).toPromise()

    return { client }
  }

  @Mutation()
  async loginClient(
    @Context() context: any,
    @Args('input') input: LoginClientInput
  ): Promise<ClientPayload> {
    const { res } = context;
    const client = await this.clientsService.findByEmail({ email: input.email }).toPromise()
    if (isEmpty(client)) throw new Error('Unable to Login')

    const isSame: boolean = await this.passwordUtils.compare(input.password, client)
    if (!isSame) throw new Error('Wrong Password')

    res.cookie('access-token', await this.authService.generateAccessToken(client), {
    })

    res.cookie('refresh-token', await this.authService.generateRefreshToken(client), {
    })

    return { client }
  }

  @Mutation()
  @UseGuards(RefreshAuthGuard)
  async refreshToken(@Context() context: any, @CurrentClient() client: Client): Promise<ClientPayload> {
    const { res } = context

    res.cookie('access-token', await this.authService.generateAccessToken(client), {
      httpOnly: true,
      maxAge: 1.8e6
    })
    res.cookie('refresh-token', await this.authService.generateRefreshToken(client), {
      httpOnly: true,
      maxAge: 1.728e8
    })

    return { client }
  }

  @Mutation()
  async logout(@Context() context: any): Promise<boolean> {
    const { res } = context

    res.cookie('access-token', '', {
      httpOnly: true,
      maxAge: 0
    })
    res.cookie('refresh-token', '', {
      httpOnly: true,
      maxAge: 0
    })

    return true
  }
}