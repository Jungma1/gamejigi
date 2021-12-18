import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './models/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: UserDto) {
    const createUser = this.userRepository.create(user);
    return this.userRepository.save(createUser);
  }

  async findOne(id: string) {
    return this.userRepository.findOne({ id });
  }

  async findOneByProviderAndEmail(user: UserDto) {
    return this.userRepository.findOne({
      provider: user.provider,
      email: user.email,
    });
  }

  async setHashedRefreshToken(id: string, refreshToken: string) {
    const salt = await bcrypt.genSalt();
    const hashedRefreshToken = await bcrypt.hash(refreshToken, salt);

    return this.userRepository.update(id, {
      hashed_refresh_token: hashedRefreshToken,
    });
  }
}
