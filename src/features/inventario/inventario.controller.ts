import { Controller, Get, Param } from '@nestjs/common';
import { InventarioService } from './inventario.service';

@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @Get('/actualizar-existencias/:inventarioId')
  async actualizarExistencias(
    @Param('inventarioId') inventarioId: number,
  ): Promise<void> {
    await this.inventarioService.actualizarExistencias(inventarioId);
  }
}
