import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StuffsService } from './stuffs.service';
import { Prisma } from '@prisma/client';


@Controller('stuffs')
export class StuffsController {
  constructor(private readonly stuffsService: StuffsService) {}

  @Post()
  create(@Body() createStuffDto: Prisma.StuffCreateInput) {
    return this.stuffsService.create(createStuffDto);
  }

  @Get()
  findAll() {
    return this.stuffsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stuffsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStuffDto: Prisma.StuffUpdateInput) {
    return this.stuffsService.update(+id, updateStuffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stuffsService.remove(+id);
  }
}
