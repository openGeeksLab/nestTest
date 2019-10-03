import { Module } from "@nestjs/common";
import { join } from "path";
import { ConfigServise } from "./config.service";

@Module({
    providers: [
        {
            provide: ConfigServise,
            useValue: new ConfigServise(join(process.cwd(), '.env'))
        },
    ],
    exports: [ConfigServise]
})

export class ConfigModule { }
