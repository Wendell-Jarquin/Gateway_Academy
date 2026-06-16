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
          host: process.env.ESTUDIANTES_HOST || 'localhost',
          port: Number(process.env.ESTUDIANTES_SERVICE_PORT) || 3001,
        },
      },
    ]),
  ],
  controllers: [SexosController],
  providers: [],
})
export class SexosModule {}
