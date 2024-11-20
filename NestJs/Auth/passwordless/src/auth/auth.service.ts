import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService){}
  validateUser(email: string) {
    const user= this.userService.findOneByEmail(email);

    if(!user) throw new UnauthorizedException();

    return user;
  }
}
