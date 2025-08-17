import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Access } from '../access/access.entity';

@Entity()
export class Spaces {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  capacity: number;

  @OneToMany(() => Access, (access) => access.space)
  accesses: Access[];
}
