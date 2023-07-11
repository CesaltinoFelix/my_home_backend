import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StuffModule } from './stuff/stuff.module';
import { StuffsModule } from './stuffs/stuffs.module';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [StuffModule, StuffsModule, CategoriesModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
