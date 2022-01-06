import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from 'src/user/user.service';
import { JwtAuthService } from './jwt-auth/jwt-auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtAuthService: JwtAuthService,
    private readonly userService: UserService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.cookies['access_token'];
    const refreshToken = req.cookies['refresh_token'];
    console.log('미들웨어');

    // accessToken OR refreshToken 이 없는 경우
    if (!accessToken || !refreshToken) return next();

    try {
      // refreshToken 유효성 검사
      await this.jwtAuthService.verifyToken(refreshToken);
    } catch (err) {
      return next();
    }

    try {
      // accessToken 유효성 검사
      await this.jwtAuthService.verifyToken(accessToken);
    } catch (err) {
      const decoded = await this.jwtAuthService.decodedToken(refreshToken);
      const hashedRefreshToken = await this.userService.getHashedRefreshToken(
        decoded['id'],
      );
      const isMatched = await this.userService.isRefreshTokenMatched(
        refreshToken,
        hashedRefreshToken,
      );

      // DB 의 hashedRefreshToken과 쿠키의 refreshToken이 일치하지 않음
      if (!isMatched) return next();

      // 새로운 accessToken 발급
      const freshAccessToken = await this.jwtAuthService.getFreshAccessToken(
        decoded['id'],
      );

      res.cookie('access_token', freshAccessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });

      req.cookies.access_token = freshAccessToken;
    }

    next();
  }
}
