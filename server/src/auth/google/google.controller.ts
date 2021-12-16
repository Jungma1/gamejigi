import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleGuard } from './guard/google.guard';
import { JwtAuthService } from '../jwt-auth/jwt-auth.service';
import { JwtAuthGuard } from '../jwt-auth/guard/jwt-auth.guard';

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
    const { accessToken } = await this.jwtAuthService.register(req.user);

    res.cookie('accessToken', accessToken);

    return res.send(req.user);
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  async test(@Req() req: Request) {
    return req.user;
  }
}
