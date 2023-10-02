import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { User } from './user';

@Entity()
export class Server extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  id_discord: string;

  @Column()
  name: string;

  @OneToMany(() => User, (User) => User.found_in)
  users: User[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
