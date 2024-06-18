import {createLogger,transports,format} from 'winston';

export const logger = createLogger({
    transports:[
        // new transports.Console({
        //     level: 'info',
        //     format: format.combine(format.timestamp(),format.simple())
        // }),
        new transports.File({
            filename: 'server-infos.log',
            level: 'info',
            format: format.combine(format.timestamp(),format.json())
        })
    ]
})

