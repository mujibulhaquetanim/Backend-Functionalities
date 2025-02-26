import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from 'src/interceptors/logger/logger.interceptor';

@Controller('users')
export class UsersController {
    
    @Get()
    @UseInterceptors(LoggerInterceptor)
    getUsers(){
        return [{id: 1, name: 'mujibai'}];
    }
}
