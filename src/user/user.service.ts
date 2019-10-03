import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserDto } from './dto/user.dto';
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserDto>) { }

    create(userData: UserDto): Promise<UserDto> {
        const createdUser = new this.userModel(userData);
        return createdUser.save()
    }
}
