import { Injectable } from '@nestjs/common';
import { HealthResponse } from './app.interfaces';

@Injectable()
export class AppService {
  getHealth = (): HealthResponse => {
    return {
      status: '200',
      timestamp: new Date().toISOString()
    };
  };
}
