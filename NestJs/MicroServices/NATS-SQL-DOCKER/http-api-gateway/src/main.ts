import { NestFactory } from '@nestjs/core';
import { AppModule } from './http-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
