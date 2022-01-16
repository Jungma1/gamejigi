import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleGuard } from './google/guard/google.guard';
import { JwtAuthService } from './jwt-auth/jwt-auth.service';
import { Request, Response } from 'express';
import { UserDto } from 'src/user/dto/user.dto';
import { JwtAuthGuard } from './jwt-auth/guard/jwt-auth.guard';
import { User } from 'src/user/models/user.entity';
import { ConfigService } from '@nestjs/config';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly jwtAuthService: JwtAuthService,
    private readonly configService: ConfigService,
  ) {}

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

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000 * 24 * 30,
    });

    return res.redirect(this.configService.get('HOST'));
  }

  @Get('check')
  @UseGuards(JwtAuthGuard)
  async checkUser(@Req() req: Request, @Res() res: Response) {
    const { email, username, role } = req.user as User;

    return res.status(200).json({
      email,
      username,
      role,
    });
  }

  @Get('test')
  async getTestToken(@Res() res: Response) {
    const { accessToken, refreshToken } = await this.jwtAuthService.testToken();

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000 * 24 * 30,
    });

    return res.send();
  }
}
