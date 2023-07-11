import { PartialType } from '@nestjs/mapped-types';
import { CreateStuffDto } from './create-stuff.dto';

export class UpdateStuffDto extends PartialType(CreateStuffDto) {}
