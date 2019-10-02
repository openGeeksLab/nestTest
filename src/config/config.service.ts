import * as dotenv from 'dotenv';
import * as fs from 'fs';
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor(filePath: string) {
        console.log('filePath', filePath)
        try {
            // this.envConfig = dotenv.parse(fs.readFileSync(`${process.env.NODE_ENV}.env`));

        } catch (error) {
            console.log(error);

        }
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}