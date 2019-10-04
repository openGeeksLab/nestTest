import { UserRepository } from './user.repository';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userModel: UserRepository) { }

  create(userData: UserDto): Promise<UserDto> {
    return this.userModel.create(userData);
  }

  findOne(options: Object = {}): Promise<UserDto> {
    return this.userModel.findOne({ ...options });
  }

  findAll(options: Object = {}): Promise<UserDto> {
    return this.userModel.findOne({ ...options });
  }
}

// TODO:  actions here
