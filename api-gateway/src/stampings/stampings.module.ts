import { Module } from '@nestjs/common';
import { StampingsService } from './stampings.service';
import { StampingsResolver } from './stampings.resolver';

@Module({
  providers: [StampingsService, StampingsResolver]
})
export class StampingsModule {}
