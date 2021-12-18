import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  provider: string;

  @Column()
  provider_id: string;

  @Column({ nullable: true })
  hashed_refresh_token: string;
}
