import { Body, Controller, Patch, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth/guard/jwt-auth.guard';
import { User } from 'src/entity/user.entity';
import { UserProfileUpdateDto } from './dto/user-profile-update.dto';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch()
  @UseGuards(JwtAuthGuard)
  async patchUser(@Req() req: Request, @Body() body: UserProfileUpdateDto) {
    const { id } = req.user as User;
    const user = await this.userService.update(id, body);
    return user;
  }
}
