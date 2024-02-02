import { Controller, Get } from '@nestjs/common';
import { InventarioUpdateLogService } from './log.service';

@Controller('inventario-log')
export class InventarioUpdateLogController {
  constructor(
    private readonly inventarioUpdateLogService: InventarioUpdateLogService,
  ) {}

  @Get('recently-added-products')
  async getRecentlyAddedProducts(): Promise<any[]> {
    const recentlyAddedProducts =
      await this.inventarioUpdateLogService.findRecentlyAddedProducts();
    const result = recentlyAddedProducts.map((log) => ({
      updatedStock: log.updatedStock,
      createdAt: log.createdAt,
      productName: log.inventario.productoMedico.nombreComercial,
    }));

    return result;
  }
}
