import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './magicLogin.strategy';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly strategy: MagicLoginStrategy) {}
    //POST /api/auth/login {email} -> send magic link
    @Post('login')
    async login(@Req() req, @Res() res){
      return this.strategy.send(req, res)
    }

    //GET /api/auth/callback?token=token=some-token -> JWT access token
    @Get('callback')
    async callback(){
      //
    }
}
