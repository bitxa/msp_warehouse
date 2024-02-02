import { Entity, Column } from 'typeorm';
import { ProductoMedico } from './producto-medico.entity';

@Entity()
export class Insumo extends ProductoMedico {
  @Column({ name: 'tipo' })
  tipo: string;
}
