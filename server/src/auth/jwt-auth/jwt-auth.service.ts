import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload } from './strategy/jwt-auth.strategy';

@Injectable()
export class JwtAuthService {
  constructor(private readonly jwtService: JwtService) {}

  async getAccessToken(user) {
    const payload: Payload = {
      id: user.id,
      provider: user.provider,
      sub: user.id,
    };
    const accessToken = this.jwtService.sign(payload);

    return accessToken;
  }
}
