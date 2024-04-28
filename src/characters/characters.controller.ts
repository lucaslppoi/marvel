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

  @Get(':id')
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
}
