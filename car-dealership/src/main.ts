import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ 
      whitelist: true, // Si llega una propiedad que no está en el DTO, la elimina 
      forbidNonWhitelisted: true // Si llega una propiedad que no está en el DTO, lanza un error
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
main();
