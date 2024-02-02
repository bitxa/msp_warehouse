/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdministradorModule } from '@features/administrador/administrador.module';
import { InventarioModule } from '@features/inventario/inventario.module';
import { Administrador } from '@entities/administrador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradorController } from '@features/administrador/administrador.controller';
import { Repository } from 'typeorm';
import { AppDataSource } from './config/typeorm';
import { ProductoMedicoModule } from '@features/producto-medico/producto-medico.module';
import { DatabaseModule } from './global';
import { InventarioUpdateLog } from '@entities/log.entity';
import { InventarioUpdateLogModule } from '@features/log/log.module';

@Module({
  imports: [
    AdministradorModule,
    ProductoMedicoModule,
    InventarioModule,
    InventarioUpdateLogModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...AppDataSource.options,
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
