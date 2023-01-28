import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { JwtRefreshStrategy } from "./jwt-refresh.strategy";
import { AuthResolver } from "./auth.resolver";
import { JwtService } from '@nestjs/jwt'

@Module({
  imports: [ConfigModule, LoggerModule],
  providers: [
    AuthService,
    JwtStrategy,
    JwtRefreshStrategy,
    AuthResolver,
    {
      provide: 'JwtAccessTokenService',
      inject: [ConfigService],
      useFactory: (configService: ConfigService): JwtService => {
        return new JwtService({
          secret: configService.get<string>('JWT_ACCESSTOKEN_SECRET'),
          signOptions: {
            audience: configService.get<string>('JWT_AUDIENCE'),
            issuer: configService.get<string>('JWT_ISSUER'),
            expiresIn: '30min'
          }
        })
      }
    },
    {
      provide: 'JwtRefreshTokenService',
      inject: [ConfigService],
      useFactory: (configService: ConfigService): JwtService => {
        return new JwtService({
          secret: configService.get<string>('JWT_REFRESHTOKEN_SECRET'),
          signOptions: {
            audience: configService.get<string>('JWT_AUDIENCE'),
            issuer: configService.get<string>('JWT_ISSUER'),
            expiresIn: '30min'
          }
        })
      }
    },
  ],
  exports: [AuthService]
})

export class AuthModule{}