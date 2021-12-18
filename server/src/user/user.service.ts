import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './models/user.repository';

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
}
