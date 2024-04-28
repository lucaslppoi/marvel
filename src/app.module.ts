import { Module } from '@nestjs/common';
import { SeriesModule } from './series/series.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatorsModule } from './creators/creators.module';
import { ComicsModule } from './comics/comics.module';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    SeriesModule,
    CreatorsModule,
    ComicsModule,
    CharactersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
