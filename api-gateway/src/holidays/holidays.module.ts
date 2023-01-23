import { Module } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidaysResolver } from './holidays.resolver';

@Module({
  providers: [HolidaysService, HolidaysResolver]
})
export class HolidaysModule {}