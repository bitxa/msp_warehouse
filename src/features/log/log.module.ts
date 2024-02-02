import { Module } from '@nestjs/common';
import { InventarioUpdateLogService } from './log.service';
import { InventarioUpdateLogController } from './log.controller';
import { InventarioUpdateLog } from '@entities/log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoMedico } from '@entities/producto-medico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoMedico, InventarioUpdateLog])],
  controllers: [InventarioUpdateLogController],
  providers: [InventarioUpdateLogService],
  exports: [InventarioUpdateLogService],
})
export class InventarioUpdateLogModule {}
