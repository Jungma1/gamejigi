import { Module } from '@nestjs/common';
import { GoogleModule } from './google/google.module';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [GoogleModule, UserModule],
  exports: [AuthModule],
  controllers: [AuthController],
})
export class AuthModule {}
