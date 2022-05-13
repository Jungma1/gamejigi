import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from '../repository/user.repository';
import * as bcrypt from 'bcrypt';
import { UserProfileRepository } from '../repository/user-profile.repository';
import { AdminUserRepository } from 'src/repository/admin-user.repository';
import {
  ROLE_ADMIN,
  ROLE_MEMBER,
} from 'src/auth/roles/decorator/roles.decorator';
import { MemberUserRepository } from 'src/repository/member-user.repository';
import { UserProfileUpdateDto } from './dto/user-profile-update.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userProfileRepository: UserProfileRepository,
    private readonly adminUserRepository: AdminUserRepository,
    private readonly memberUserRepository: MemberUserRepository,
  ) {}

  async createUser(user: UserDto) {
    const { thumbnail, ...newUser } = user;

    // create user
    const createUser = this.userRepository.create(newUser);
    await this.userRepository.save(createUser);

    // create profile
    const userProfile = this.userProfileRepository.create({
      displayName: createUser.username,
      thumbnail: user.thumbnail,
      fk_user_id: createUser.id,
    });
    await this.userProfileRepository.save(userProfile);

    return createUser;
  }

  async updateProfile(userId: string, profile: UserProfileUpdateDto) {
    await this.userProfileRepository.update({ fk_user_id: userId }, profile);
    const user = await this.userProfileRepository.findOne({
      fk_user_id: userId,
    });

    return user;
  }

  async findOne(userId: string) {
    return this.userRepository.findOne(userId);
  }

  async findOneProfile(userId: string) {
    return this.userProfileRepository.findOne({
      fk_user_id: userId,
    });
  }

  async findOneFirstProfile() {
    return this.userProfileRepository.findOne();
  }

  async findOneByProviderAndSocialId(user: UserDto) {
    return this.userRepository.findOne({
      provider: user.provider,
      socialId: user.socialId,
    });
  }

  async isRefreshTokenMatched(
    refreshToken: string,
    hashedRefreshToken: string,
  ) {
    return bcrypt.compare(refreshToken, hashedRefreshToken);
  }

  async setHashedRefreshToken(id: string, refreshToken: string) {
    const salt = await bcrypt.genSalt();
    const hashedRefreshToken = await bcrypt.hash(refreshToken, salt);

    return this.userRepository.update({ id }, { hashedRefreshToken });
  }

  async getHashedRefreshToken(id: string) {
    const { hashedRefreshToken } = await this.userRepository.findOne({ id });

    return hashedRefreshToken;
  }

  async removeHashedRefreshToken(id: string) {
    return this.userRepository.update({ id }, { hashedRefreshToken: null });
  }

  async isRolesMatched(userId: string, roles: string[]) {
    for (const index in roles) {
      switch (roles[index]) {
        case ROLE_ADMIN:
          if (!(await this.adminUserRepository.findOne({ fk_user_id: userId })))
            return false;
          break;
        case ROLE_MEMBER:
          if (
            !(await this.memberUserRepository.findOne({ fk_user_id: userId }))
          )
            return false;
          break;
      }
    }

    return true;
  }
}
