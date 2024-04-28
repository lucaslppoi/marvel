import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comics } from './entities/comic.entity';
import { Model } from 'mongoose';
import { CreateComicsDto } from './dto/create-comics-dto';
import { UpdateComicsDto } from './dto/update-comics-dto';

@Injectable()
export class ComicsService {
  constructor(
    @InjectModel(Comics.name) private readonly comicsModel: Model<Comics>,
  ) {}

  async create(createComicsDto: CreateComicsDto): Promise<Comics> {
    const createdCreator = new this.comicsModel(createComicsDto);
    return await createdCreator.save();
  }

  async findAll(): Promise<Comics[]> {
    return await this.comicsModel.find().exec();
  }

  async findById(id: string): Promise<Comics> {
    return await this.comicsModel.findById(id);
  }

  async update(id: string, updateCreatorDto: UpdateComicsDto): Promise<Comics> {
    return await this.comicsModel.findByIdAndUpdate(id, updateCreatorDto);
  }

  async remove(id: string): Promise<Comics> {
    return await this.comicsModel.findByIdAndDelete(id);
  }
}
