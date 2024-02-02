import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '@entities/user.entity';
import { Administrador } from '@entities/administrador.entity';
import { Dispositivo } from '@entities/dispositivo.entity';
import { Insumo } from '@entities/insumo-medico.entity';
import { Inventario } from '@entities/inventario.entity';
import { Medicamento } from '@entities/medicamento.entity';
import { ProductoMedico } from '@entities/producto-medico.entity';
import { UsuarioAutorizado } from '@entities/usuario-autorizado.entity';
import { InventarioUpdateLog } from '@entities/log.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'mspdb',
  synchronize: true,
  logging: true,
  entities: [
    User,
    Administrador,
    Dispositivo,
    Insumo,
    Inventario,
    Medicamento,
    ProductoMedico,
    UsuarioAutorizado,
    InventarioUpdateLog,
  ],
  migrations: [],
  subscribers: [],
});
