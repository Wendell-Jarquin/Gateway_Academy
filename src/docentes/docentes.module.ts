import { Module } from '@nestjs/common';
import { DocentesController } from './docentes.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DOCENTE_SERVICE } from 'src/config/docente-service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: DOCENTE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.DOCENTE_MICROSERVICE_HOST || 'localhost',
          port: Number(process.env.DOCENTE_MICROSERVICE_PORT) || 3003,
        },
      },
    ]),
  ],
  controllers: [DocentesController],
  providers: [],
})
export class DocentesModule {}
