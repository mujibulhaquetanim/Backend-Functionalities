import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

    //POST /api/auth/login {email} -> send magic link
    @Post('/api/auth/login')
    login(){
      //
    }

    //GET /api/auth/callback?token=token=some-token -> JWT access token
    @Get('/api/auth/callback')
    callback(){
      //
    }
  }
}
