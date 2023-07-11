import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';


@Injectable()
export class CategoriesService {
  create(createCategoryDto: Prisma.CategoryCreateInput) {
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: Prisma.CategoryUpdateInput) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
