import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { ShiftsModule } from './shifts/shifts.module';
import { StampingsModule } from './stampings/stampings.module';
import { ClientsModule } from './clients/clients.module';
import { SummariesModule } from './summaries/summaries.module';
import { HolidayTypesModule } from './holiday-types/holiday-types.module';
import { EmployeeWorkTermsModule } from './employee-work-terms/employee-work-terms.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule, PinoLogger } from 'nestjs-pino';
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql';
import { DateTimeResolver, EmailAddressResolver, UnsignedIntResolver } from 'graphql-scalars'
import { GraphQLJSONObject } from 'graphql-type-json'
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        pinoHttp: {
          safe: true,
          prettifier: configService.get<string>('NODE_ENV') !== 'production'
        }
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [LoggerModule],
      driver: ApolloDriver,
      useFactory: async(): Promise<GqlModuleOptions<ApolloDriver>> => ({
        path: '/',
        typePaths: ['./**/*.graphql'],
        resolvers: {
          DateTime: DateTimeResolver,
          EmailAddress: EmailAddressResolver,
          UnsignedInt: UnsignedIntResolver,
          JSONObject: GraphQLJSONObject
        },
        definitions: {
          path: join(__dirname, 'graphql.ts')
        },
        // debug: true,
        // cors: false,
        // playground: {
        //   endpoint: '/',
        //   subscriptionEndpoint: '/',
        //   settings: {
        //     'request.credentials': 'include'
        //   },
        //   tabs: [
        //     {
        //       name: 'GraphQL API',
        //       endpoint: '/',
        //     }
        //   ]
        // },
        context: ({ req, res }): any => ({ req, res }),
      }),
      inject: [PinoLogger]
    }),
    EmployeesModule,
    ShiftsModule,
    StampingsModule,
    ClientsModule,
    SummariesModule,
    HolidayTypesModule,
    EmployeeWorkTermsModule,
  ],
})
export class AppModule {}
