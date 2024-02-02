import { Module } from '@nestjs/common';
import { ProductoMedicoService } from './producto-medico.service';
import { ProductoMedicoController } from './producto-medico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoMedico } from '@entities/producto-medico.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ProductoMedico])],
  controllers: [ProductoMedicoController],
  providers: [ProductoMedicoService],
})
export class ProductoMedicoModule {}
