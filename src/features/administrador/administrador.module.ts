import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioService } from '@features/inventario/inventario.service';
import { ProductoMedico } from '@entities/producto-medico.entity';
import { InventarioModule } from '@features/inventario/inventario.module';
import { Inventario } from '@entities/inventario.entity';
import { Insumo } from '@entities/insumo-medico.entity';
import { Dispositivo } from '@entities/dispositivo.entity';
import { Medicamento } from '@entities/medicamento.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductoMedico,
      Insumo,
      Dispositivo,
      Medicamento,
      Inventario,
    ]),
    InventarioModule,
  ],
  controllers: [AdministradorController],
  providers: [AdministradorService, InventarioService],
})
export class AdministradorModule {}
