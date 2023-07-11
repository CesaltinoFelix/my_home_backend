import { Module } from '@nestjs/common';
import { StuffsService } from './stuffs.service';
import { StuffsController } from './stuffs.controller';

@Module({
  controllers: [StuffsController],
  providers: [StuffsService]
})
export class StuffsModule {}
