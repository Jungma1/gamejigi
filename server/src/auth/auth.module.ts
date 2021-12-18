import { Module } from '@nestjs/common';
import { GoogleModule } from './google/google.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [GoogleModule],
  exports: [AuthModule],
  controllers: [AuthController],
})
export class AuthModule {}
