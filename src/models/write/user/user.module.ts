import { UserWrite } from './user.write';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../../db/write/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers:[UserWrite],
  exports: [UserWrite],
})

export class UserModelWrite{}
