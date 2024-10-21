import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Servers } from 'nats/lib/nats-base-client/servers';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions
  >({
    transport: Transport.NATS,
    options: {
      Servers: ['nats://nats'],
    },
  })
  await app.listen();
}
bootstrap();
