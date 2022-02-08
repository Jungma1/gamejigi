import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from './UserProfile';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  username!: string;

  @Column()
  provider!: string;

  @Column()
  social_id!: string;

  @Column({ nullable: true })
  hashed_refresh_token!: string;

  @Column('timestamptz')
  @CreateDateColumn()
  created_at!: Date;

  @Column('timestamptz')
  @UpdateDateColumn()
  updated_at!: Date;

  @OneToOne(() => UserProfile, (profile) => profile.user)
  profile!: UserProfile;
}