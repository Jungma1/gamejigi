import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleGuard } from './guard/google.guard';

@Controller('api/auth')
export class AuthController {
  @Get('google')
  @UseGuards(GoogleGuard)
  async googleAuth(@Req() req: Request) {
    // callback url
  }

  @Get('google/callback')
  @UseGuards(GoogleGuard)
  async googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    console.log(req.user);
    return req.user;
  }
}
