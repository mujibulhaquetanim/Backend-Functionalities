import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

// guard sit between the request and the controller and is used to validate the request before it reaches the controller. it is usually used for authentication and authorization.
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('inside the auth guard');
    const req = context.switchToHttp().getRequest<Request>();

    // return must be true or false
    return true;
  }
}
