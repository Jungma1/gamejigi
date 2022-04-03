import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../entity/user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProfileRepository } from '../entity/user-profile.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, UserProfileRepository])],
  providers: [UserService],
  exports: [UserModule, UserService],
  controllers: [UserController],
})
export class UserModule {}
