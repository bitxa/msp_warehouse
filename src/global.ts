import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicamento } from '@entities/medicamento.entity';
import { Inventario } from '@entities/inventario.entity';
import { Dispositivo } from '@entities/dispositivo.entity';
import { Insumo } from '@entities/insumo-medico.entity';
import { ProductoMedico } from '@entities/producto-medico.entity';
import { InventarioUpdateLog } from '@entities/log.entity';
// ... other entities

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Medicamento,
      Inventario,
      ProductoMedico,
      Insumo,
      Dispositivo,
      Medicamento,
      Inventario,
      InventarioUpdateLog,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
