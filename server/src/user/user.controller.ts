import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth/guard/jwt-auth.guard';
import { Roles, ROLE_ADMIN } from 'src/auth/roles/decorator/roles.decorator';
import { RolesGuard } from 'src/auth/roles/guard/roles.guard';
import { UserFindDto } from './dto/user-find.dto';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  @Roles(ROLE_ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  async getUser(@Body() userFindDto: UserFindDto) {
    const { id } = userFindDto;

    return this.userService.findOne(id);
  }

  @Get('users')
  @Roles(ROLE_ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  async getAllUser() {
    return this.userService.findAll();
  }
}
