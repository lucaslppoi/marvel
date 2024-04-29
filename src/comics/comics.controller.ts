import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComicsService } from './comics.service';
import { CreateComicsDto } from './dto/create-comics-dto';
import { UpdateComicsDto } from './dto/update-comics-dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comics')
@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Post()
  create(@Body() createComicsDto: CreateComicsDto) {
    return this.comicsService.create(createComicsDto);
  }

  @Get()
  findAll() {
    return this.comicsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.comicsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComicsDto: UpdateComicsDto) {
    return this.comicsService.update(id, updateComicsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comicsService.remove(id);
  }

  @Get('/quantity')
  countQuantity() {
    return this.comicsService.countQuantity();
  }

  @Get('/random')
  findRandomly() {
    return this.comicsService.findRandomly();
  }
}
