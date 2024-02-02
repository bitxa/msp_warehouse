// inventario.entity.ts

import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Administrador } from '@entities/administrador.entity';
import { ProductoMedico } from '@entities/producto-medico.entity';
import { InventarioUpdateLog } from '@entities/log.entity';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'cantidad' })
  cantidad: number;

  @Column({ name: 'fecha_fabricacion' })
  fechaFabricacion: string;

  @Column({ name: 'fecha_caducidad' })
  fechaCaducidad: string;

  @Column({ name: 'almacen' })
  almacen: string;

  @Column({ name: 'ubicacion' })
  ubicacion: string;

  @ManyToOne(
    () => Administrador,
    (administrador) => administrador.inventarios,
    { cascade: true },
  )
  administrador: Administrador;

  @ManyToOne(
    () => ProductoMedico,
    (productoMedico) => productoMedico.inventario,
  )
  productoMedico: ProductoMedico;

  @OneToMany(() => InventarioUpdateLog, (updateLog) => updateLog.inventario)
  updateLogs: InventarioUpdateLog[];
}
