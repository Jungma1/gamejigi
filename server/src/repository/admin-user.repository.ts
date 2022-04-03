import { AdminUser } from 'src/entity/admin-user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(AdminUser)
export class AdminUserRepository extends Repository<AdminUser> {}
