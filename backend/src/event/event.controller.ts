import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { CalendarEvent } from './event.interface';

@Controller('events')
export class EventController {
  constructor(private readonly eventsService: EventService) {}

  @Get()
  getEvents(): CalendarEvent[] {
    return this.eventsService.findAll();
  }
}
