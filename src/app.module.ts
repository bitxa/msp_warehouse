import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GestorInventarioModule } from './gestor-inventario/gestor-inventario.module';
import { GestorInventarioModule } from './gestor-inventario/gestor-inventario.module';

@Module({
  imports: [GestorInventarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
