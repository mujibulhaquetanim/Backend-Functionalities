import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //GET /api/auth/protected -> require jwt token
  @Get('protected')
  getProtected(): string {
    return 'Protected';
  }
}
