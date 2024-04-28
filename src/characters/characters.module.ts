import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Characters, CharactersSchema } from './schemas/characters.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Characters.name, schema: CharactersSchema }])
  ],
  controllers: [CharactersController],
  providers: [CharactersService],
  exports: [CharactersService],
})
export class CharactersModule { }
