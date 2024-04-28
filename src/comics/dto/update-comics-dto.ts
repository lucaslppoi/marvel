import { PartialType } from '@nestjs/mapped-types';
import { CreateComicsDto } from './create-comics-dto';

export class UpdateComicsDto extends PartialType(CreateComicsDto) {}
