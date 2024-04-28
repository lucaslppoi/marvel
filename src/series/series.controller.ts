import { Controller, Get, Post, Param } from '@nestjs/common';
import { SeriesService } from './series.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('series')
@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get('/name/:name')
  getFromMarvel(@Param('name') name: string) {
    return this.seriesService.getFromMarvel(name);
  }

  @Post('/save')
  saveData() {
    return this.seriesService.saveData();
  }
}
