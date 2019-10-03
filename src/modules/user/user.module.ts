import { UserModelWrite } from './../../models/write/user/user.module';
import { UserSchema } from '../../db/write/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [UserModelWrite],
  controllers:[UserController],
  providers: [UserService],
})
export class UserModule { }
