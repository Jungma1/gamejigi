import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleGuard } from './google/guard/google.guard';
import { JwtAuthService } from './jwt-auth/jwt-auth.service';
import { Request, Response } from 'express';
import { UserDto } from 'src/user/dto/user.dto';
import { JwtAuthGuard } from './jwt-auth/guard/jwt-auth.guard';
import { ConfigService } from '@nestjs/config';
import { UserProfile } from 'src/entity/user-profile.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/entity/user.entity';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly jwtAuthService: JwtAuthService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  /**
   * GET  /api/auth/google
   * Google Signin
   */
  @Get('google')
  @UseGuards(GoogleGuard)
  async googleAuth() {
    // callback url
  }

  /**
   * GET /api/auth/google/callback
   * Google Signin callback url
   */
  @Get('google/callback')
  @UseGuards(GoogleGuard)
  async googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    const user = req.user as UserDto;
    const { accessToken, refreshToken } = await this.jwtAuthService.register(
      user,
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

  /**
   * GET /api/auth/check
   * Auth check
   */
  @Get('check')
  @UseGuards(JwtAuthGuard)
  async checkUser(@Req() req: Request, @Res() res: Response) {
    const { id } = req.user as User;
    const { no, displayName, shortWord, thumbnail, blogUrl, githubUrl } =
      await this.userService.findOneProfile(id);

    return res.status(200).json({
      no,
      displayName,
      shortWord,
      thumbnail,
      blogUrl,
      githubUrl,
    });
  }

  /**
   * GET /api/auth/logout
   */
  @Get('/logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req: Request, @Res() res: Response) {
    const { fk_user_id } = req.user as UserProfile;

    await this.userService.removeHashedRefreshToken(fk_user_id);

    return res.clearCookie('access_token').clearCookie('refresh_token').send();
  }

  /**
   * Get /api/auth/test
   */
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
