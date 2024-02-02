import { Column, Entity } from 'typeorm';
import { ProductoMedico } from './producto-medico.entity';

@Entity()
export class Medicamento extends ProductoMedico {
  @Column({ name: 'composicion' })
  nombreCientifico: string;

  @Column({ name: 'forma_farmaceutica' })
  formaFarmaceutica: string;
}
