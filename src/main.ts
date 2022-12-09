import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('MovieFlix')
    .setDescription('Aplicação de Filmes, Séries e Animes')
    .setVersion('1.0.0')
    .addTag('Status')
    .addTag('Users')
    .addTag('profiles')
    .addTag('categoryOne')
    .addTag('categoryTwo')
    .addTag('categoryThree')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}

bootstrap();
