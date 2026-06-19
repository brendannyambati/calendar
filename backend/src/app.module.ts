import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventService } from './event/event.service';
import { EventsModule } from './event/event.module';

@Module({
  imports: [EventsModule],
  controllers: [AppController],
  providers: [AppService, EventService],
})
export class AppModule {}
