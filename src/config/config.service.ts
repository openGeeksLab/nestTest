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
}