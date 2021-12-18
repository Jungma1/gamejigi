import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth/guard/jwt-auth.guard';
import { UserFindDto } from './dto/user-find.dto';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  @UseGuards(JwtAuthGuard)
  async getUser(@Body() userFindDto: UserFindDto) {
    const { id } = userFindDto;

    return this.userService.findOne(id);
  }

  @Get('users')
  @UseGuards(JwtAuthGuard)
  async getAllUser() {
    return this.userService.findAll();
  }
}
