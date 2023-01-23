import { Module } from '@nestjs/common';
import { StampingsService } from './stampings.service';
import { StampingsResolver } from './stampings.resolver';
import { StampingsService } from './stampings.service';

@Module({
  providers: [StampingsService, StampingsResolver]
})
export class StampingsModule {}
