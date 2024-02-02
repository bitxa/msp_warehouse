import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoMedico } from '@entities/producto-medico.entity';
import dayjs from 'dayjs'; // Import dayjs for timestamp calculations

@Injectable()
export class ProductoMedicoService {
  constructor(
    @InjectRepository(ProductoMedico)
    private readonly productoMedicoRepository: Repository<ProductoMedico>,
  ) {}

  async findAllRecentlyUpdated(): Promise<ProductoMedico[]> {
    // Calculate the timestamp for one hour ago
    const oneHourAgo = dayjs().subtract(1, 'hour').toDate();

    const query = `
         SELECT *
         FROM producto_medico
         WHERE updated_at < $1
       `;

    return this.productoMedicoRepository.query(query, [oneHourAgo]);
  }
}
