import { UserSchema } from './../db/schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// import { userProvider } from './../db/providers/user.provider';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers:[UserController],
  providers: [UserService],
})
export class UserModule { }
