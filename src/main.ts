/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './config/typeorm';

import { Medicamento } from '@entities/medicamento.entity'; // Import your entity classes here
import { Insumo } from '@entities/insumo-medico.entity';
import { Dispositivo } from '@entities/dispositivo.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    await AppDataSource.runMigrations();
    console.log('Migrations executed');
  } catch (err) {
    console.error(
      'Error during Data Source initialization, migrations, or data insertion:',
      err,
    );
    process.exit(1);
  }

  console.log(`La aplicación está corriendo en: ${await app.getUrl()}`);
}

bootstrap();
