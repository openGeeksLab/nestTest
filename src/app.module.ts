import { Module, Global } from '@nestjs/common';
import { ConfigModule } from './config/config.module'

@Module({
  imports: [
    ConfigModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
