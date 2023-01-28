import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

async function main() {
  const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter())
  const configService: ConfigService = app.get(ConfigService)
  app.use(
    cors({
      origin: "*",
      credentials: true
    })
  )
  app.use(cookieParser)
  app.useLogger(app.get(Logger))

  return app.listen(configService.get<number>('GRAPH_PORT'))
}
main();
