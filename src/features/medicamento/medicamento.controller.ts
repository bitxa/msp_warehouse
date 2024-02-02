/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { Medicamento } from '@entities/medicamento.entity';
import { Inventario } from '@entities/inventario.entity';

@Controller('medicamento')
export class MedicamentoController {}
