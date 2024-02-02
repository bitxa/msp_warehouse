/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductoMedicoService } from './producto-medico.service';
import { ProductoMedico } from '@entities/producto-medico.entity';
import { Inventario } from '@entities/inventario.entity';

@Controller('producto')
export class ProductoMedicoController {
  constructor(private readonly productoMedicoService: ProductoMedicoService) {}

  @Get('recently-updated-productos-medicos')
  async getRecentlyUpdatedProductosMedicos(): Promise<ProductoMedico[]> {
    console.log('recently-updated-productos-medicos');
    return this.productoMedicoService.findAllRecentlyUpdated();
  }
}
