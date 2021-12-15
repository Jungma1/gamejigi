import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';

@Module({
  imports: [GithubModule],
  exports: [AuthModule],
})
export class AuthModule {}
