import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharactersDto } from './dto/create-characters-dto';
import { UpdateCharactersDto } from './dto/update-characters-dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('characters')
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Post()
  create(@Body() createCharactersDto: CreateCharactersDto) {
    return this.charactersService.create(createCharactersDto);
  }

  @Get()
  findAll() {
    return this.charactersService.findAll();
  }

  @Get('/id/:id')
  findById(@Param('id') id: string) {
    return this.charactersService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharactersDto: UpdateCharactersDto,
  ) {
    return this.charactersService.update(id, updateCharactersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersService.remove(id);
  }

  @Get('/random')
  findRandomly() {
    return this.charactersService.findRandomly();
  }

  @Get('/findByName/:name')
  findByName(@Param('name') name: string) {
    return this.charactersService.findByName(name);
  }

  @Get('/getThunbnail/:id')
  getThunbnail(@Param('id') id: string) {
    return this.charactersService.getThunbnail(id);
  }
}
