import { PartialType } from '@nestjs/mapped-types';
import { CreateCharactersDto } from './create-characters-dto';

export class UpdateCharactersDto extends PartialType(CreateCharactersDto) {}
