<<<<<<< HEAD
import * as path from 'path';

export class ConfigService {
    private readonly envConfig;
    constructor(filePath: string) {
        const certPath = path.join(__dirname, `env/${filePath}.js`);
        this.envConfig = require(certPath).default;
    }

    get(key: string): string {
        return this.envConfig[key];
    }
=======
import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigServise{
    private readonly envConfig: {[key:string]: string};

    constructor(filePath: string){
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }

    get(key:string): string{
        return this.envConfig[key];
    }
>>>>>>> 58ba89dc2321110aad7ae6b3f02940d2b4850fd1
}