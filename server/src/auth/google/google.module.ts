import { Module } from '@nestjs/common';
import { JwtAuthModule } from '../jwt-auth/jwt-auth.module';
import { GoogleStrategy } from './strategy/google.strategy';

@Module({
  imports: [JwtAuthModule],
  providers: [GoogleStrategy],
  exports: [GoogleModule, JwtAuthModule],
})
export class GoogleModule {}
