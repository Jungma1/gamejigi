import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get<string>('OAUTH_GITHUB_ID'),
      clientSecret: configService.get<string>('OAUTH_GITHUB_SECRET'),
      callbackURL: configService.get<string>('OAUTH_GITHUB_CALLBACK_URL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken, refreshToken, profile) {
    const { id, login, name } = profile._json;

    return {
      provider: 'github',
      providerId: id,
      id: login,
      name,
    };
  }
}
