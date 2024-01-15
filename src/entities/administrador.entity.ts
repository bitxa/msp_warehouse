import { Column, ChildEntity } from 'typeorm';
import { UsuarioAutorizado } from './usuario-autorizado.entity';

@ChildEntity()
export class Administrador extends UsuarioAutorizado {
  @Column()
  experiencia: number;
}
