import { Injectable } from '@nestjs/common';
import { Characters } from './entities/characters.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCharactersDto } from './dto/create-characters-dto';
import { UpdateCharactersDto } from './dto/update-characters-dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel(Characters.name) private characterModel: Model<Characters>,
  ) {}

  async create(createCharactersDto: CreateCharactersDto): Promise<Characters> {
    const createdCharacter = new this.characterModel(createCharactersDto);
    return await createdCharacter.save();
  }

  async findAll(): Promise<Characters[]> {
    return await this.characterModel.find().exec();
  }

  async findById(id: string): Promise<Characters> {
    return await this.characterModel.findById(id);
  }

  async update(
    id: string,
    updateCharactersDto: UpdateCharactersDto,
  ): Promise<Characters> {
    return await this.characterModel.findByIdAndUpdate(id, updateCharactersDto);
  }

  async remove(id: string): Promise<Characters> {
    return await this.characterModel.findByIdAndDelete(id);
  }

  async findRandomly(): Promise<Characters> {
    const allCharacters = await this.findAll();
    return allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  async findByName(name: string) {
    return await this.characterModel.findOne({ name });
  }

  async getThunbnail(id: string) {
    return (await this.characterModel.findById(id)).thumbnail;
  }
}
