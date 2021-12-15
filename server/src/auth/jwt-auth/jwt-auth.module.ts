import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthStrategy } from './strategy/jwt-auth.strategy';
import { JwtAuthService } from './jwt-auth.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '2h' },
      }),
    }),
  ],
  providers: [JwtAuthService, JwtAuthStrategy],
  exports: [JwtAuthModule, JwtAuthService],
})
export class JwtAuthModule {}
