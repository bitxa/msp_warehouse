// insumo.entity.ts
import { Entity, Column } from 'typeorm';
import { ProductoMedico } from './producto-medico.entity';

@Entity()
export class Insumo extends ProductoMedico {
  @Column({ type: 'int' })
  private cantidadPorPaquete: number;
  @Column()
  private propiedadesEspecificas: string;
}
