import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeriesModule } from './series/series.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatorsModule } from './creators/creators.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    SeriesModule,
    CreatorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
