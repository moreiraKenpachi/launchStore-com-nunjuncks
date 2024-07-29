/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import * as nunjucks from 'nunjucks';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const express = app.getHttpAdapter().getInstance();

  const assets = path.join(__dirname, '..', 'public');
  const diretorio = path.join(__dirname, '..', 'src');

  nunjucks.configure(`${diretorio}/views`, {
    express,
    autoescape: false,
    noCache: true
  });

  app.useStaticAssets(assets);
  app.setBaseViewsDir(`${diretorio}/views`);
  app.setViewEngine('njk');

  await app.listen(process.env.PORT);
}
bootstrap();
