import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './models/user.repository';
import * as bcrypt from 'bcrypt';
import { UserProfileRepository } from './models/user-profile.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userProfileRepository: UserProfileRepository,
  ) {}

  async create(user: UserDto) {
    // create user
    const createUser = this.userRepository.create(user);
    await this.userRepository.save(createUser);

    // create profile
    const userProfile = this.userProfileRepository.create({
      display_name: createUser.username,
      thumbnail: 'default',
      fk_user_id: createUser.id,
    });
    await this.userProfileRepository.save(userProfile);

    return createUser;
  }

  async findOneProfile(userId: string) {
    return this.userProfileRepository.findOne({
      fk_user_id: userId,
    });
  }

  async findOneByProviderAndSocialId(user: UserDto) {
    return this.userRepository.findOne({
      provider: user.provider,
      social_id: user.social_id,
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

    return this.userRepository.update(
      { id },
      { hashed_refresh_token: hashedRefreshToken },
    );
  }

  async getHashedRefreshToken(id: string) {
    const { hashed_refresh_token: hashedRefreshToken } =
      await this.userRepository.findOne({ id });

    return hashedRefreshToken;
  }

  async removeHashedRefreshToken(id: string) {
    return this.userRepository.update({ id }, { hashed_refresh_token: null });
  }
}
