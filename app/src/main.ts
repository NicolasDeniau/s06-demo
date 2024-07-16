import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // si on veut préfixer TOUTES les routes de l'app
  // app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
