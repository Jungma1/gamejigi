import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleGuard } from './guard/google.guard';
import { JwtAuthService } from '../jwt-auth/jwt-auth.service';
import { JwtAuthGuard } from '../jwt-auth/guard/jwt-auth.guard';
import { UserDto } from 'src/user/dto/user.dto';

@Controller('api/auth')
export class GoogleController {
  constructor(private readonly jwtAuthService: JwtAuthService) {}

  @Get('google')
  @UseGuards(GoogleGuard)
  async googleAuth() {
    // callback url
  }

  @Get('google/callback')
  @UseGuards(GoogleGuard)
  async googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    const requestUser = req.user as UserDto;
    const { accessToken, refreshToken } = await this.jwtAuthService.register(
      requestUser,
    );

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000 * 24 * 14,
    });

    return res.send(req.user);
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  async test(@Req() req: Request) {
    return req.user;
  }
}
