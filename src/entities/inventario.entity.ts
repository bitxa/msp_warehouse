/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ProductoMedico } from './producto-medico.entity';
import { UsuarioAutorizado } from './usuario-autorizado.entity';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    () => ProductoMedico,
    (productoMedico) => productoMedico.inventario,
  )
  productosMedicos: ProductoMedico[];

  @OneToOne(
    () => UsuarioAutorizado,
    (usuarioAutorizado) => usuarioAutorizado.inventario,
  )
  @JoinColumn()
  usuarioAutorizado: UsuarioAutorizado;

  validarDetallesTecnicos(producto: ProductoMedico): boolean {
    return true;
  }

  actualizarExistencias(producto: ProductoMedico): void {
    return null;
  }
}
