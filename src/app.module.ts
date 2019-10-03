import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

const MongooseArgs = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get('MONGO_URL')
  }),
  inject: [ConfigService]
}

@Module({
  imports: [TasksModule, MongooseModule.forRootAsync(MongooseArgs)],
})
export class AppModule { }
