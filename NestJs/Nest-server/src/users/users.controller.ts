import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from 'src/interceptors/logger/logger.interceptor';

@Controller('users')
export class UsersController {
    
    @Get()
    @UseInterceptors(LoggerInterceptor)
    getUsers(){
        console.log('inside the getUsers route handler');
        return [{id: 1, name: 'mujibai'}];
    }

    @Get('/:id')
    getUserByID(){
        console.log('inside the getUserByID route handler');
        return {id: 1, name: 'mujibai'};
    }

    @Get('/profile')
    getProfile(){
        console.log('inside the getProfile route handler');
        return {id: 1, name: 'mujibai'};
    }
}
