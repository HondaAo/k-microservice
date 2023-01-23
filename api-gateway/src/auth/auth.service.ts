import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PinoLogger } from "nestjs-pino";
import { Client, Employee } from "src/graphql/typings";

@Injectable()
export class AuthService {
  constructor(
    @Inject('JwtAccessTokenService')
    private readonly accessTokenService: JwtService,

    @Inject('JwtRefreshTokenService')
    private readonly refreshTokenService: JwtService,

    private readonly logger: PinoLogger
  ) {
    logger.setContext(AuthService.name)
  }

  async generateAccessToken(user: Client): Promise<string> {
    return this.accessTokenService.sign(
      {
        user: user.clientId
      },
      {
        subject: user.clientId
      }
    )
  }

  async generateRefreshToken(user: Client): Promise<string> {
    return this.refreshTokenService.sign(
      {
        user: user.email
      },
      {
        subject: user.clientId
      }
    )
  }
}