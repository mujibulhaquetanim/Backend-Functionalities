import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('LoggerInterceptor');
    const startTime = Date.now();
    
    //data in the tap operator is the data returned from the controller
    return next.handle().pipe(tap((data) => console.log(`After... ${Date.now() - startTime}ms, data: ${JSON.stringify(data)}`)));
  }
}
