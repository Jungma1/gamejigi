import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async register(user: UserDto) {
    const exist = await this.userService.findOneByProviderAndEmail(user);

    // 사용자가 존재하는 경우
    if (exist) {
      const payload = {
        id: exist.id,
        sub: 'access_token',
      };
      const accessToken = this.jwtService.sign(payload);
      const refreshToken = this.jwtService.sign(
        { id: exist.id, sub: 'refresh_token' },
        { expiresIn: '14d' },
      );

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
      { expiresIn: '14d' },
    );

    return {
      accessToken,
      refreshToken,
    };
  }
}
