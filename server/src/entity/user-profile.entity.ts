import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_profiles')
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid')
  fk_user_id!: string;

  @Column({ default: 0 })
  no!: number;

  @Column({ name: 'display_name', length: 255 })
  displayName!: string;

  @Column({ name: 'short_word', length: 255, default: '' })
  shortWord!: string;

  @Column({ length: 255, default: '' })
  thumbnail!: string;

  @Column({ name: 'blog_url', length: 255, default: '' })
  blogUrl!: string;

  @Column({ name: 'github_url', length: 255, default: '' })
  githubUrl!: string;

  @Column('timestamptz')
  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @Column('timestamptz')
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fk_user_id' })
  user!: User;
}
