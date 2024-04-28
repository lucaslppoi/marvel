import { Module } from '@nestjs/common';
import { ComicsService } from './comics.service';
import { ComicsController } from './comics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comics, ComicsSchema } from './schemas/comic.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comics.name, schema: ComicsSchema }])
  ],
  controllers: [ComicsController],
  providers: [ComicsService],
  exports: [ComicsService],
})
export class ComicsModule { }
