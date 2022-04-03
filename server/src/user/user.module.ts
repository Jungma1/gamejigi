import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProfileRepository } from '../repository/user-profile.repository';
import { AdminUserRepository } from 'src/repository/admin-user.repository';
import { MemberUserRepository } from 'src/repository/member-user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      UserProfileRepository,
      AdminUserRepository,
      MemberUserRepository,
    ]),
  ],
  providers: [UserService],
  exports: [UserModule, UserService],
  controllers: [UserController],
})
export class UserModule {}
