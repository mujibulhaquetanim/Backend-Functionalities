import { Injectable } from '@nestjs/common';
import { concatMap, filter, map, mergeMap, Observable, of, switchMap, tap } from 'rxjs';

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

    // of is observable which takes any number of arguments and emits them one by one in sequence, it converts plain data into stream.
    // using tap function we can add a side effect to the observable without changing its value.
    //map function that transforms the value emitted by the observable
    //Maps each transformed number to a new observable that emits a string.
    of(1,3,5,6,7).pipe(tap((data)=> console.log(`before ${data}`)), filter((data)=> data%2===0), map((data)=> data*2), mergeMap((id)=> of(`hello ${id}`)), concatMap((id)=> of(`hello ${id}`)), switchMap((id)=> of(`hello ${id}`)), tap((data)=> console.log(`after ${data}`))).subscribe();

    return 'Welcome to RxJS';
  }
}
