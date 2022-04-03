import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from './user-profile.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: true })
  email!: string;

  @Column()
  username!: string;

  @Column()
  provider!: string;

  @Column({ name: 'social_id' })
  socialId!: string;

  @Column({ name: 'hashed_refresh_token', nullable: true })
  hashedRefreshToken!: string;

  @Column('timestamptz')
  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @Column('timestamptz')
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @OneToOne(() => UserProfile, (profile) => profile.user)
  profile!: UserProfile;
}
