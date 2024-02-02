import { Column, Entity, OneToMany } from 'typeorm';
import { UsuarioAutorizado } from './usuario-autorizado.entity';
import { Inventario } from './inventario.entity';

@Entity()
export class Administrador extends UsuarioAutorizado {
  @Column({ name: 'fecha_asignacion' })
  fecha_asignacion: string;

  @OneToMany(() => Inventario, (inventario) => inventario.administrador)
  inventarios: Inventario[];
}
