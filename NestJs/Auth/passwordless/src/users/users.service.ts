import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private readonly user: User[]= [
        {
            id: 1,
            email: "dummy1@gmail.com",
            name: "dummy1"
        },
        {
            id: 2,
            email: "dummy2@gmail.com",
            name: "dummy2"
        }
    ]

    findOneByEmail(email: string): User | undefined {
        return this.user.find((user)=> user.email === email);
    }
}
