import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.entity';
import { User } from './user.entity';

@Entity('user_roles')
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid')
  fk_user_id!: string;

  @Column('uuid')
  fk_role_id!: string;

  @Column('timestamptz')
  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @Column('timestamptz')
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fk_user_id' })
  user!: User;

  @ManyToOne(() => Role, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fk_role_id' })
  role!: Role;
}
