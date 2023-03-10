import { Module } from '@nestjs/common';
import { ShiftsResolver } from './shifts.resolver';
import { ShiftsService } from './shifts.service';

@Module({
  providers: [ShiftsService, ShiftsResolver]
})
export class ShiftsModule {}
