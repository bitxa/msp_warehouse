import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  InternalServerErrorException,
} from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { Inventario } from '@entities/inventario.entity';
import { ProductoMedico } from '@entities/producto-medico.entity';

@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  @Get('/producto/:nombreProducto')
  async consultarDetallesProducto(
    @Param('nombreProducto') nombreProducto: string,
  ): Promise<ProductoMedico[]> {
    console.log('querying producto');
    return await this.administradorService.consultarDetallesProducto(
      nombreProducto,
    );
  }

  @Post('/producto')
  async registrarProductoMedico(
    @Body()
    createProductoDto: {
      fechaCaducidad: string;
      fechaFabricacion: string;
      ubicacion: string;
      cantidad: number;
      almacen: string;
      administradorId: number;
      productoMedicoId: number;
    },
  ): Promise<Inventario> {
    try {
      return await this.administradorService.registrarProductoMedico(
        createProductoDto.fechaCaducidad,
        createProductoDto.fechaFabricacion,
        createProductoDto.ubicacion,
        createProductoDto.cantidad,
        createProductoDto.almacen,
        createProductoDto.administradorId,
        createProductoDto.productoMedicoId,
      );
    } catch (error) {
      console.error('Error registering product:', error);
      throw new InternalServerErrorException('Failed to register product');
    }
  }
}
