import { Module } from '@nestjs/common';
import { StampingsService } from './stamps.service';
import { StampingsResolver } from './stamps.resolver';

@Module({
  providers: [StampingsService, StampingsResolver]
})
export class StampingsModule {}
