import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { Inventario } from '@entities/inventario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoMedico } from '@entities/producto-medico.entity';
import { AdministradorService } from '@features/administrador/administrador.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoMedico, Inventario])],
  controllers: [InventarioController],
  providers: [InventarioService, AdministradorService],
  exports: [InventarioService],
})
export class InventarioModule {}
