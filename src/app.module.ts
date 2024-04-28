import { Module } from '@nestjs/common';
import { SeriesModule } from './series/series.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatorsModule } from './creators/creators.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    SeriesModule,
    CreatorsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
