import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class UsuarioAutorizado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'celular' })
  celular: string;

  @Column({ name: 'genero' })
  genero: string;

  @Column({ name: 'correo' })
  correo: string;
}
