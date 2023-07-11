import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StuffModule } from './stuff/stuff.module';

@Module({
  imports: [StuffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
