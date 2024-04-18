import { Module } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [SeriesController],
  providers: [SeriesService],
  imports: [
    HttpModule,
  ]
})
export class SeriesModule { }
