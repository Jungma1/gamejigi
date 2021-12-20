import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async register(user: UserDto) {
    const exist = await this.userService.findOneByProviderAndEmail(user);

    // 사용자가 있을 경우
    if (exist) {
      const payload = {
        id: exist.id,
        sub: 'access_token',
      };
      const accessToken = this.jwtService.sign(payload);
      const refreshToken = this.jwtService.sign(
        { id: exist.id, sub: 'refresh_token' },
        {
          expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRES_IN'),
        },
      );

      await this.userService.setHashedRefreshToken(exist.id, refreshToken);

      return {
        accessToken,
        refreshToken,
      };
    }

    // 사용자가 없을 경우
    const saveUser = await this.userService.create(user);
    const payload = {
      id: saveUser.id,
      sub: 'access_token',
    };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(
      { id: saveUser.id, sub: 'refresh_token' },
      {
        expiresIn: this.configService.get<string>('REFRESH_TOKEN_EXPIRES_IN'),
      },
    );

    await this.userService.setHashedRefreshToken(saveUser.id, refreshToken);

    return {
      accessToken,
      refreshToken,
    };
  }
}
