import { Entity, Column } from 'typeorm';
import { ProductoMedico } from './producto-medico.entity';

@Entity()
export class Dispositivo extends ProductoMedico {
  @Column({ name: 'tipo_dispositivo' })
  tipoDispositivo: string;
}
