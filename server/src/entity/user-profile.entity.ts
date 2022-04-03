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

  @Column({ default: false })
  rank!: boolean;

  @Column({ length: 255 })
  display_name!: string;

  @Column({ length: 255, default: '' })
  short_word!: string;

  @Column({ length: 255, default: '' })
  thumbnail!: string;

  @Column({ length: 255, default: '' })
  blog_url!: string;

  @Column({ length: 255, default: '' })
  github_url!: string;

  @Column('timestamptz')
  @CreateDateColumn()
  created_at!: Date;

  @Column('timestamptz')
  @UpdateDateColumn()
  updated_at!: Date;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fk_user_id' })
  user!: User;
}
