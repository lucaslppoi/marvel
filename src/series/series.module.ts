import { Module } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { CreatorsModule } from '../creators/creators.module';
import { CharactersModule } from '../characters/characters.module';
import { ComicsModule } from '../comics/comics.module';

@Module({
  controllers: [SeriesController],
  providers: [SeriesService],
  imports: [CreatorsModule, CharactersModule, ComicsModule],
})
export class SeriesModule {}
