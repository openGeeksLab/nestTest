import {
    Controller,
    Post,
    Body,
    ValidationPipe ,
    UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userTdo: UserDto) {
    console.log('userTdo', userTdo);
    return this.userService.create(userTdo);
  }
}
