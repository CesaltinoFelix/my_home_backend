import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class StuffsService {
  create(createStuffDto: Prisma.StuffCreateInput) {
    return 'This action adds a new stuff';
  }

  findAll() {
    return `This action returns all stuffs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stuff`;
  }

  update(id: number, updateStuffDto: Prisma.StuffUpdateInput) {
    return `This action updates a #${id} stuff`;
  }

  remove(id: number) {
    return `This action removes a #${id} stuff`;
  }
}
