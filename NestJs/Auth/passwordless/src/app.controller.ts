import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //GET /api/auth/protected -> require jwt token
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('protected')
  getProtected(@Req() req): string {
    return `Hello ${req.user.name}, you are logged in.`;
  }
}
