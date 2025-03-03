import { Injectable } from '@nestjs/common';
import { map, Observable, of, tap } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    const obs = new Observable<number>((observer)=>{
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    obs.subscribe((data)=> console.log(data));

    // of is observable which takes any number of arguments and emits them one by one in sequence
    // using tap function we can add a side effect to the observable without changing its value.
    //map function that transforms the value emitted by the observable
    of(1,3,5).pipe(tap((data)=> console.log(`before ${data}`)), map((data)=> data*2), tap((data)=> console.log(`after ${data}`))).subscribe();

    return 'Welcome to RxJS';
  }
}
