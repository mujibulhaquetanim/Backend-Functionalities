import { Injectable } from '@nestjs/common';
import { concatMap, filter, map, mergeMap, Observable, of, switchMap, tap } from 'rxjs';

@Injectable()
export class AppService {
  getReflectMetaData(): string {
    class User{
      private name: string;
      constructor(name: string){
        this.name = name
      }
      //hardcoded metadata
      // @Reflect.metadata('name', 'user')
      getName(): string{
        return this.name;
      }

      getRole(): string{
        return Reflect.getMetadata('role', this)
      }

      deleteMetaData(){
        return Reflect.deleteMetadata('role', this)
      }

      hasMetaData(){
        return Reflect.hasMetadata('role', this)
      }
    }

    //dynamic metadata
    class UserFactory{
      static create(name: string, role: string){
        const user = new User(name);
        Reflect.defineMetadata('role', role, user)
        return user;
      }
    }

    // function getMetaData(usr: User){
    //   return Reflect.getMetadata('role', usr)
    // }

    const user = UserFactory.create('mujibai', 'admin');
    console.log(user.getName(), user.getRole());

    // const user = new User('');
    // Reflect.defineMetadata('name', 'user', User.prototype);
    // Reflect.defineMetadata('name', 'user', user);
    // Reflect.defineMetadata('name', 'user', user, 'getName'); //used for method
    // Reflect.getMetadata('name', User.prototype);
    // return 'Welcome to NestJS ' + Reflect.getMetadata('name', user);
    // return 'Welcome to Reflect pkg practice session: ' + Reflect.getMetadata('name', user, 'getName'); //without method name it will return undefined
    return `Welcome to Reflect pkg practice session: Before Delete: isRolePresent: ${user.hasMetaData()}, user: ${user.getName()} role: ${user.getRole()} delete: deleteMetaData: ${user.deleteMetaData()} isRolePresent: ${user.hasMetaData()}`;
  }
  getRxJs(): string {
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
