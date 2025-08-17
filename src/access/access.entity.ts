import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from '../users/users.entity';
import { Spaces } from '../spaces/spaces.entity';

@Entity()
export class Access {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Users, (user) => user.accesses, { eager: true })
  user: Users;

  @ManyToOne(() => Spaces, (space) => space.accesses, { eager: true })
  space: Spaces;

  @Column()
  code: string; // Puede ser un string o QR generado

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ default: true })
  active: boolean;
}
