import { Model } from 'mongoose';
import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserDto } from './dto/user.dto';
import { DUPLICATE_KEY } from '../../constants/mongoose.error.codes';
@Injectable()
export class UserRepository {

  constructor(@InjectModel('User') private readonly userModel: Model<UserDto>) { }

  async create(userData: UserDto): Promise<UserDto> {
    const createdUser = new this.userModel(userData);
    let resData;
    try {
      resData - await createdUser.save();
    } catch (error) {
      if (error.code === DUPLICATE_KEY) {
        throw new ConflictException('Mail already exist');
      }else {
        throw new InternalServerErrorException();
      }

    }
    return resData;
  }

  findOne(options: Object = {}): Promise<UserDto> {
    return this.userModel.findOne({ ...options });
  }

  findAll(options: Object = {}): Promise<UserDto> {
    return this.userModel.find({ ...options });
  }
}
