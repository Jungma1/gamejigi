import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async register(user) {
    const exist = await this.userService.findOneByProviderAndEmail(
      user.provider,
      user.email,
    );

    // 사용자가 존재하는 경우
    if (exist) {
      const payload = {
        provider: exist.provider,
        email: exist.email,
      };

      return {
        accessToken: this.jwtService.sign(payload),
      };
    }

    const saveUser = await this.userService.create(user);
    const payload = {
      provider: saveUser.provider,
      email: saveUser.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
