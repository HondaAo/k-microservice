import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { ClientsResolver } from './clients.resolver';
import { ClientGrpcProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [ConfigModule, LoggerModule],
  providers: [
    ClientsResolver,
    {
        provide: 'ClientsServiceClient',
        useFactory: (configService: ConfigService): ClientGrpcProxy => {
          return ClientProxyFactory.create({
            transport: Transport.GRPC,
            options: {
              url: configService.get<string>('BASE_SVC_URL'),
              package: 'clients',
              protoPath: join(__dirname, "../proto/clients.proto"),
              loader: {
                keepCase: true,
                enums: String,
                arrays: true
              }
            }
          })
        },
        inject: [ConfigService]
    },
  ],
  exports: ['ClientsServiceClient']
})
export class ClientsModule {}
