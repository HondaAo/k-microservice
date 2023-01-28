import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientGrpcProxy } from "@nestjs/microservices";
import { PassportStrategy } from "@nestjs/passport";
import { get } from "lodash";
import { PinoLogger } from "nestjs-pino";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { IClientService } from "src/clients/client.interface";
import { Client } from "src/graphql/typings";

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') implements OnModuleInit {
  constructor(
    @Inject('ClientsServiceClient')
    private readonly clientsServiceClient: ClientGrpcProxy,
    private readonly configService: ConfigService,
    private readonly logger: PinoLogger
  ) {
    super({
        secretOrKey: configService.get<string>('JWT_REFRESHTOKEN_SECRET'),
        issuer: configService.get<string>('JWT_ISSUER'),
        audience: configService.get<string>('JWT_AUDIENCE'),
        jwtFromRequest: ExtractJwt.fromExtractors([(req) => get(req, 'cookies.refresh-token')])
      })
    logger.setContext(JwtRefreshStrategy.name)
  }

  onModuleInit():void {
    this.clientService = this.clientsServiceClient.getService<IClientService>('ClientsServiceClient');
  }

  private clientService: IClientService

  async validate(payload: any): Promise<Client> {
    return this.clientService.findOne({ clientId: payload.sub }).toPromise();
  }
}