import { Body, Controller, Get, Post, Req, Res, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './strategy/magicLogin.strategy';
import { loginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly strategy: MagicLoginStrategy) {}
    //POST /api/auth/login {email} -> send magic link
    @Post('login')
    async login(@Req() req, @Res() res, @Body(new ValidationPipe()) body: loginDto){
      this.authService.validateUser(body.destination);
      return this.strategy.send(req, res)
    }

    //GET /api/auth/callback?token=token=some-token -> JWT access token
    @Get('callback')
    async callback(){
      //
    }
}
