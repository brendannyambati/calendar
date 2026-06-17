import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { HealthResponse } from './app.interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  health(): HealthResponse {
    return this.appService.getHealth();
  }

  @Get('health')
  getHealth(): HealthResponse {
    return this.appService.getHealth();
  }
  
}
