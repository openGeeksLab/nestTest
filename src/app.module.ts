import { Module } from '@nestjs/common';
import { TasksModule } from './modules/tasksToDelete/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { UserModule } from './modules/user/user.module';

const MongooseArgs = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get('MONGO_URL'),
    useNewUrlParser: true,
  }),
  inject: [ConfigService],
};

@Module({
  imports: [
    TasksModule,
    UserModule,
    MongooseModule.forRootAsync(MongooseArgs), UserModule],
})
export class AppModule { }
