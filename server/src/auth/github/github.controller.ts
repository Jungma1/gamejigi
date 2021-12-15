import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GithubGuard } from './guard/github.guard';
import { JwtAuthService } from '../jwt-auth/jwt-auth.service';
import { JwtAuthGuard } from '../jwt-auth/guard/jwt-auth.guard';

@Controller('api/auth')
export class GithubController {
  constructor(private readonly jwtAuthService: JwtAuthService) {}

  @Get('github')
  @UseGuards(GithubGuard)
  async githubAuth() {
    // callback url
  }

  @Get('github/callback')
  @UseGuards(GithubGuard)
  async githubAuthCallback(@Req() req: Request, @Res() res: Response) {
    const accessToken = await this.jwtAuthService.getAccessToken(req.user);

    res.cookie('accessToken', accessToken);

    return res.send(req.user);
  }

  @Get('/test')
  @UseGuards(JwtAuthGuard)
  async test(@Req() req: Request) {
    return req.user;
  }
}
