import {
    Controller,
    Post,
    Body,
    Get,
    BadRequestException,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';

import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() userTdo: UserDto): Promise<UserDto> {
    return this.userService.create(userTdo);
  }

  @Get()
  getAll() {
    return this.userService.findOne();
  }
}
