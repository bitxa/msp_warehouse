// medicamento.entity.ts
import { Column, Entity } from 'typeorm';
import { ProductoMedico } from './producto-medico.entity';

@Entity()
export class Medicamento extends ProductoMedico {
  @Column()
  private composicion: string;
  @Column()
  private propiedadesEspecificas: string;
}
