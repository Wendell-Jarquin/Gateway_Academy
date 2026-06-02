import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ESTUDIANTE_SERVICE } from 'src/config/service';
import { SexosController } from './sexos.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ESTUDIANTE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.MICROSERVICE_HOST,
          port: Number(process.env.MICROSERVICE_PORT),
        },
      },
    ]),
  ],
  controllers: [SexosController],
  providers: [],
})
export class SexosModule {}
