import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventario } from '@entities/inventario.entity';
import { InventarioService } from '@features/inventario/inventario.service';
import { Like } from 'typeorm';
import { Medicamento } from '@entities/medicamento.entity';
import { ProductoMedico } from '@entities/producto-medico.entity';

@Injectable()
export class AdministradorService {
  @InjectRepository(Medicamento)
  private productoMedicoRepository: Repository<ProductoMedico>;

  constructor(private inventarioService: InventarioService) {}
  async consultarDetallesProducto(
    nombreProducto: string,
  ): Promise<ProductoMedico[]> {
    const productos = await this.productoMedicoRepository.find({
      where: { nombreComercial: Like(`%${nombreProducto}%`) },
    });

    return productos;
  }

  async registrarProductoMedico(
    fechaCaducidad: string,
    fechaFabricacion: string,
    ubicacion: string,
    cantidad: number,
    almacen: string,
    administradorId: number,
    productoMedicoId: number,
  ): Promise<Inventario> {
    const nuevoInventario =
      await this.inventarioService.createAndSaveInventario({
        fechaCaducidad,
        fechaFabricacion,
        ubicacion,
        cantidad,
        almacen,
        administradorId,
        productoMedicoId,
      });

    await this.inventarioService.actualizarExistencias(nuevoInventario.id);
    return nuevoInventario;
  }
}
