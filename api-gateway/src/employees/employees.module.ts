import { Inject, Module } from '@nestjs/common';
import { EmployeesResolver } from './employees.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LoggerModule } from 'nestjs-pino';
import { ClientGrpcProxy, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [LoggerModule, ConfigModule],
  providers: [
    EmployeesResolver,
    {
      provide: 'EmployeesServiceClient',
      useFactory: (configService: ConfigService): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: configService.get<string>('BASE_SVC_URL'),
            package: 'employees',
            protoPath: join(__dirname, "../proto/employees.proto"),
            loader: {
              keepCase: true,
              oneofs: true,
              arrays: true
            }
          }
        })
      },
      inject: [ConfigService]
    },
  ],
  exports: ['EmployeesServiceClient']
})
export class EmployeesModule {}
