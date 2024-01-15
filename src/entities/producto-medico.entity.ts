// producto-medico.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Inventario } from './inventario.entity';

@Entity()
export class ProductoMedico {
  @Column()
  private descripcion: string;

  @Column()
  private detallesTecnicos: string;

  @Column()
  private estado: string;

  @Column()
  private fechaCaducidad: string;

  @Column()
  private nombre: string;

  @Column({ type: 'double precision' })
  private precio: number;

  @Column()
  private proveedor: string;

  @Column()
  private tipo: string;

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Inventario, (inventario) => inventario.productosMedicos)
  inventario: Inventario;
}
