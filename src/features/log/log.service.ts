import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventarioUpdateLog } from '@entities/log.entity';
import { DateTime } from 'luxon'; // Import luxon DateTime

@Injectable()
export class InventarioUpdateLogService {
  constructor(
    @InjectRepository(InventarioUpdateLog)
    private readonly updateLogRepository: Repository<InventarioUpdateLog>,
  ) {}

  async findRecentlyAddedProducts(): Promise<InventarioUpdateLog[]> {
    const oneHourAgo = DateTime.now()
      .setZone('America/Guayaquil')
      .minus({ hours: 0 });

    console.log(oneHourAgo.toISO());

    const queryBuilder =
      this.updateLogRepository.createQueryBuilder('updateLog');

    queryBuilder
      .leftJoinAndSelect('updateLog.inventario', 'inventario')
      .leftJoinAndSelect('inventario.productoMedico', 'productoMedico')
      .addSelect(['productoMedico.nombreComercial AS nombre_comercial']) // Use the alias
      .where('updateLog.createdAt < :oneHourAgo', {
        oneHourAgo: oneHourAgo.toISO(),
      });

    console.log(queryBuilder.getSql());

    return queryBuilder.getMany();
  }
}
