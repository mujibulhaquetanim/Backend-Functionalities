import {createLogger,transports,format} from 'winston';

export const logger = createLogger({
    transports:[
        new transports.Console({
            level: 'info',
            // format: format.combine(format.timestamp(),format.json())
            format: format.combine(format.timestamp(),format.simple())
        }), 
    ]
})

