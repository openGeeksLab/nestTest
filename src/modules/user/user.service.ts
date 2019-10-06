import { UserRepository } from './user.repository';
import { Model } from 'mongoose';
import { Injectable, BadRequestException } from '@nestjs/common';

import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userModel: UserRepository) { }

  async create(userData: UserDto): Promise<UserDto> {
    // const { email } = userData ;
    // const userMailExist = await this.userService.findOne({ email });

    // if (userMailExist) {
    //   throw new BadRequestException();
    // }
    return this.userModel.create(userData);
  }

  findOne(options: Object = {}): Promise<UserDto> {
    return this.userModel.findOne({ ...options });
  }

  findAll(options: Object = {}): Promise<UserDto> {
    return this.userModel.findOne({ ...options });
  }
}

// here can handle exceptions
