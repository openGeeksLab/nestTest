import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { ConfigServise } from './config/config.service';

const MongooseArgs = {
  imports: [ConfigModule],
  useFactory: async (configService:ConfigServise)=>({
    uri:configService.get('MONGO_URL')
  }),
  inject: [ConfigServise]
}
@Module({
  imports: [TasksModule, MongooseModule.forRootAsync(MongooseArgs)],
})
export class AppModule { }
