// inventario-update-log.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Inventario } from './inventario.entity';

@Entity()
export class InventarioUpdateLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  inventarioId: number;

  @Column()
  updatedStock: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Inventario, (inventario) => inventario.updateLogs)
  @JoinColumn({ name: 'inventarioId' })
  inventario: Inventario;
}
