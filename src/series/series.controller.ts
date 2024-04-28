import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) { }

  @Post('/name/:name')
  create(@Param('name') name: string) {
    return this.seriesService.create(name);
  }

  @Get()
  findAll() {
    return this.seriesService.mapCreators();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.seriesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSeriesDto: UpdateSeriesDto) {
  //   return this.seriesService.update(+id, updateSeriesDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.seriesService.remove(+id);
  // }
}
