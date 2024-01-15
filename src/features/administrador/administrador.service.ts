/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from '@entities/administrador.entity';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectRepository(Administrador)
    private administradoresRepository: Repository<Administrador>,
  ) {}
  /*
  create(
    createAdministradorDto: CreateAdministradorDto,
  ): Promise<Administrador> {
    const administrador = this.administradoresRepository.create(
      createAdministradorDto,
    );
    return this.administradoresRepository.save(administrador);
  }

  findAll(): Promise<Administrador[]> {
    return this.administradoresRepository.find({
      relations: ['ordenesReubicacion', 'gestorInventario'],
    });
  }


  findOne(id: number): Promise<Administrador> {
    return this.administradoresRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateAdministradorDto: UpdateAdministradorDto,
  ): Promise<Administrador> {
    return this.administradoresRepository.save({
      id,
      ...updateAdministradorDto,
    });
  }
  */
  remove(id: number): Promise<void> {
    return this.administradoresRepository.delete(id).then(() => {});
  }
}
