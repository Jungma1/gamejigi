import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

export interface Payload {
  email: string;
  provider: string;
}

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const accessToken = request.cookies['accessToken'];
          return accessToken;
        },
      ]),
    });
  }

  async validate(payload: Payload) {
    const user = await this.userService.findOneByProviderAndEmail(
      payload.provider,
      payload.email,
    );
    const { email, username } = user;

    return {
      email,
      username,
    };
  }
}
