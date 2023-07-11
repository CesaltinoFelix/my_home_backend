import { Injectable } from '@nestjs/common';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';

@Injectable()
export class StuffsService {
  create(createStuffDto: CreateStuffDto) {
    return 'This action adds a new stuff';
  }

  findAll() {
    return `This action returns all stuffs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stuff`;
  }

  update(id: number, updateStuffDto: UpdateStuffDto) {
    return `This action updates a #${id} stuff`;
  }

  remove(id: number) {
    return `This action removes a #${id} stuff`;
  }
}
