// producto-medico.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
  OneToMany,
} from 'typeorm';
import { Inventario } from './inventario.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class ProductoMedico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nombre_comercial' })
  nombreComercial: string;

  @Column({ name: 'descripcion' })
  descripcion: string;

  @Column({ name: 'precio', type: 'double precision' })
  precio: number;

  @Column({ name: 'proveedor' })
  proveedor: string;

  @Column({ name: 'fabricante' })
  fabricante: string;

  @Column({ name: 'existencias' })
  existencias: number;

  @OneToMany(() => Inventario, (inventario) => inventario.productoMedico)
  inventario: Inventario[];
}
