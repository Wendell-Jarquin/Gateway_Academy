import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FILE_SERVICE } from 'src/config/file-service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: FILE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.FILE_MICROSERVICE_HOST || 'localhost',
          port: Number(process.env.FILE_MICROSERVICE_PORT) || 3002,
        },
      },
    ]),
  ],
  controllers: [FilesController],
  providers: [],
})
export class FilesModule {}
