import { Module } from '@nestjs/common';
import { HolidayTypesService } from './holiday-types.service';
import { HolidayTypesResolver } from './holiday-types.resolver';

@Module({
  providers: [HolidayTypesService, HolidayTypesResolver]
})
export class HolidayTypesModule {}
