import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token){
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // validate token logic
    console.log('Validating token...', token);
    next();
  }
}
