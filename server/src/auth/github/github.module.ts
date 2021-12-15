import { Module } from '@nestjs/common';
import { JwtAuthModule } from '../jwt-auth/jwt-auth.module';
import { GithubController } from './github.controller';
import { GithubStrategy } from './strategy/github.strategy';

@Module({
  imports: [JwtAuthModule],
  controllers: [GithubController],
  providers: [GithubStrategy],
  exports: [GithubModule],
})
export class GithubModule {}
