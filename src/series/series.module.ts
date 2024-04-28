import { Module } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { CreatorsModule } from 'src/creators/creators.module';
import { CharactersModule } from 'src/characters/characters.module';
import { ComicsModule } from 'src/comics/comics.module';

@Module({
  controllers: [SeriesController],
  providers: [SeriesService],
  imports: [CreatorsModule, CharactersModule, ComicsModule]
})
export class SeriesModule { }
