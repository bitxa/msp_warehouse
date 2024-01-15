import { IsNumber, IsEmpty } from 'class-validator';

export class CreateAdministradorDto {
  @IsNumber()
  @IsEmpty()
  experiencia: string;
}
