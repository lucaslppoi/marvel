import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('creators')
@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Post()
  create(@Body() createCreatorDto: CreateCreatorDto) {
    return this.creatorsService.create(createCreatorDto);
  }

  @Get()
  findAll() {
    return this.creatorsService.findAll();
  }

  @Get('/id/:id')
  findById(@Param('id') id: string) {
    return this.creatorsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreatorDto: UpdateCreatorDto) {
    return this.creatorsService.update(id, updateCreatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creatorsService.remove(id);
  }

  @Delete(':id')
  findComicsByCreator(@Param('id') id: string) {
    return this.creatorsService.findComicsByCreator(id);
  }
}
