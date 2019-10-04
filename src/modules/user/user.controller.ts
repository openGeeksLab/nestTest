import {
    Controller,
    Post,
    Body,
    Get,
    BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userTdo: UserDto): Promise<UserDto> {
    const { email } = userTdo ;
    const userMailExist = await this.userService.findOne({ email });

    if (userMailExist) {
      throw new BadRequestException();
    }

    return this.userService.create(userTdo);
  }

  @Get()
  getAll() {
    return this.userService.findOne();
  }
}
