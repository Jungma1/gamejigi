import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 255 })
  name!: string;

  @Column('timestamptz')
  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @Column('timestamptz')
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
