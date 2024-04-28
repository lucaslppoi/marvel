import { Injectable } from '@nestjs/common';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import { Creator } from './entities/creator.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CreatorsService {
  constructor(
    @InjectModel(Creator.name) private creatorModel: Model<Creator>,
  ) {}

  async create(createCreatorDto: CreateCreatorDto): Promise<Creator> {
    const createdCreator = new this.creatorModel(createCreatorDto);
    return await createdCreator.save();
  }

  async findAll(): Promise<Creator[]> {
    return await this.creatorModel.find().exec();
  }

  async findById(id: string): Promise<Creator> {
    return await this.creatorModel.findById(id);
  }

  async update(
    id: string,
    updateCreatorDto: UpdateCreatorDto,
  ): Promise<Creator> {
    return await this.creatorModel.findByIdAndUpdate(id, updateCreatorDto);
  }

  async remove(id: string): Promise<Creator> {
    return await this.creatorModel.findByIdAndDelete(id);
  }
}
