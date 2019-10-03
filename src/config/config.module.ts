<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService(`${process.env.NODE_ENV || 'development'}`),
        },
    ],
    exports: [ConfigService],
})
export class ConfigModule { }
=======
import { Module } from "@nestjs/common";
import { join } from "path";
import { ConfigServise } from "./config.service";

@Module({
    providers:[
        {
            provide: ConfigServise,
            useValue: new ConfigServise(join(process.cwd(),'.env'))
        },
    ],
    exports:[ConfigServise]
})

export class ConfigModule{}
>>>>>>> 58ba89dc2321110aad7ae6b3f02940d2b4850fd1
