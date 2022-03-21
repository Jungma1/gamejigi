import { Body, Controller, Patch, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth/guard/jwt-auth.guard';
import { UserProfile } from './models/user-profile.entity';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch()
  @UseGuards(JwtAuthGuard)
  async patchUser(@Req() req: Request, @Body() body: any) {
    const { id } = req.user as UserProfile;
    return `patch user ${id}`;
  }
}
