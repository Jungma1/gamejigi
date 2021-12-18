import { EntityRepository, Repository } from 'typeorm';
import { UserAuthToken } from './user-auth-token.entity';

@EntityRepository(UserAuthToken)
export class UserAuthTokenRepository extends Repository<UserAuthToken> {}
