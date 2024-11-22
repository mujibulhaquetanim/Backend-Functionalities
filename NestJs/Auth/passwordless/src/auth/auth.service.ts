import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService){}
  validateUser(email: string) {
    const user= this.userService.findOneByEmail(email);

    if(!user) throw new UnauthorizedException();

    return user;
  }

  generateTokens(user: User) {
    //generate JWT
    const payload = {sub: user.id, email: user.email};
    console.log(process.env['JWT_SECRET']);
    console.log('JWT_SECRET in AuthModule:', process.env.JWT_SECRET);

    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
