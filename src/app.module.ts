import { Module } from '@nestjs/common';
<<<<<<< HEAD

import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from './config/config.module'
=======
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { ConfigServise } from './config/config.service';
>>>>>>> 58ba89dc2321110aad7ae6b3f02940d2b4850fd1

const MongooseArgs = {
  imports: [ConfigModule],
  useFactory: async (configService:ConfigServise)=>({
    uri:configService.get('MONGO_URL')
  }),
  inject: [ConfigServise]
}
@Module({
<<<<<<< HEAD
  imports: [
    TasksModule,
    ConfigModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
=======
  imports: [TasksModule, MongooseModule.forRootAsync(MongooseArgs)],
>>>>>>> 58ba89dc2321110aad7ae6b3f02940d2b4850fd1
})
export class AppModule { }
