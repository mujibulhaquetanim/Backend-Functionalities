import {IsEmail} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class loginDto{
    @IsEmail()
    @ApiProperty({
        description: "Example Email",
        example: "dummy1@gmail.com"
    })
    destination: string;
}