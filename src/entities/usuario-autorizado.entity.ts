import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Inventario } from './inventario.entity';

@Entity()
export class UsuarioAutorizado {
  @Column()
  private areaResponsable: string;
  @Column()
  private cargo: string;
  @Column()
  private correo: string;
  @Column()
  private genero: string;
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private nombre: string;
  @OneToOne(() => Inventario, (inventario) => inventario.usuarioAutorizado)
  @JoinColumn()
  inventario: Inventario;
}
