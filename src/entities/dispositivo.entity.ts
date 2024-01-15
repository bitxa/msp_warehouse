// dispositivo.entity.ts
import { Entity, Column } from 'typeorm';
import { ProductoMedico } from './producto-medico.entity';

@Entity()
export class Dispositivo extends ProductoMedico {
  @Column()
  private certificaciones: string;
  @Column()
  private dimensiones: string;
  @Column()
  private propiedadesEspecificas: string;
  // Additional properties and relations specific to Dispositivo can be added here
}
