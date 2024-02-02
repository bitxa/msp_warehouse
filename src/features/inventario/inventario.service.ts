import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventario } from '@entities/inventario.entity';
import { ProductoMedico } from '@entities/producto-medico.entity';
import { Repository } from 'typeorm';
import { InventarioUpdateLog } from '@entities/log.entity';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario)
    private inventarioRepository: Repository<Inventario>,
    @InjectRepository(ProductoMedico)
    private productoMedicoRepository: Repository<ProductoMedico>,
    @InjectRepository(InventarioUpdateLog)
    private readonly updateLogRepository: Repository<InventarioUpdateLog>,
  ) {}

  async actualizarExistencias(inventarioId: number): Promise<void> {
    console.log('Inventario id:', inventarioId);
    const inventario = await this.inventarioRepository.findOne({
      where: { id: inventarioId },
      relations: ['productoMedico'],
    });

    if (!inventario) {
      throw new Error('Inventario not found');
    }

    const updatedStock = inventario.cantidad;
    const productoMedico = inventario.productoMedico;

    productoMedico.existencias = productoMedico.existencias + updatedStock;

    await this.productoMedicoRepository.save(productoMedico);

    const log = new InventarioUpdateLog();
    log.inventarioId = inventarioId;
    log.updatedStock = updatedStock;
    await this.updateLogRepository.save(log);
  }

  async createAndSaveInventario(data: {
    fechaCaducidad: string;
    fechaFabricacion: string;
    ubicacion: string;
    cantidad: number;
    almacen: string;
    administradorId: number;
    productoMedicoId: number;
  }): Promise<Inventario> {
    const nuevoInventario = this.inventarioRepository.create({
      fechaCaducidad: data.fechaCaducidad,
      fechaFabricacion: data.fechaFabricacion,
      ubicacion: data.ubicacion,
      cantidad: data.cantidad,
      almacen: data.almacen,
      administrador: { id: data.administradorId },
      productoMedico: { id: data.productoMedicoId },
    });

    console.log(nuevoInventario);
    console.log('created');
    return await this.inventarioRepository.save(nuevoInventario);
  }
}
