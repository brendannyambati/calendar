import { Injectable } from '@nestjs/common';
import { DummyData, HealthResponse } from './app.interfaces';

@Injectable()
export class AppService {
  getHealth = (): HealthResponse => {
    return {
      status: '200',
      timestamp: new Date().toISOString()
    };
  };

  getDummyData = (): DummyData => {
    return {
      name: 'dummy',
      data: [1, 2, 3, 4, 5],
    }
  };
}
