import { MemberUser } from 'src/entity/member-user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(MemberUser)
export class MemberUserRepository extends Repository<MemberUser> {}
