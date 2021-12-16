import { Module } from '@nestjs/common';
import { GoogleModule } from './google/google.module';

@Module({
  imports: [GoogleModule],
  exports: [AuthModule],
})
export class AuthModule {}
