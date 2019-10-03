import {
    Controller,
    Post,
    Body,
    ValidationPipe ,
    UsePipes,
    Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from '../../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userTdo: UserDto): Promise<UserDto> {
    return this.userService.create(userTdo);
  }

  @Get()
  getAll() {
    return this.userService.findOne();
  }
}
