import {IsEmail} from 'class-validator';

export class loginDto{
    @IsEmail()
    destination: string;
}