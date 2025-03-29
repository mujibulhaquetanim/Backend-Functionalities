import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRxJs(): string {
    return this.appService.getRxJs();
  }

  @Get('reflect-metadata')
  getReflectMe(): string {
    return this.appService.getReflectMetaData();
  }
}
