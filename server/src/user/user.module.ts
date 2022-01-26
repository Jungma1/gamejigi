import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './models/user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserAuthTokenRepository } from './models/user-auth-token.repository';
import { UserProfileRepository } from './models/user-profile.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      UserAuthTokenRepository,
      UserProfileRepository,
    ]),
  ],
  providers: [UserService],
  exports: [UserModule, UserService],
  controllers: [UserController],
})
export class UserModule {}
