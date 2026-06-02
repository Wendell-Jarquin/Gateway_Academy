import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ESTUDIANTE_SERVICE } from 'src/config/service';
import { EtniasController } from './etnias.controller';

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
  controllers: [EtniasController],
  providers: [],
})
export class EtniasModule {}
