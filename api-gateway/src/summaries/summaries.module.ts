import { Module } from '@nestjs/common';
import { SummariesService } from './summaries.service';
import { SummariesResolver } from './summaries.resolver';

@Module({
  providers: [SummariesService, SummariesResolver]
})
export class SummariesModule {}
