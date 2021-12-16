import { Module } from '@nestjs/common';
import { JwtAuthModule } from '../jwt-auth/jwt-auth.module';
import { GoogleController } from './google.controller';
import { GoogleStrategy } from './strategy/google.strategy';

@Module({
  imports: [JwtAuthModule],
  controllers: [GoogleController],
  providers: [GoogleStrategy],
  exports: [GoogleModule],
})
export class GoogleModule {}
