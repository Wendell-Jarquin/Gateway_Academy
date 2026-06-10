import { Module } from '@nestjs/common';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { DocentesModule } from './docentes/docentes.module';
import { SexosModule } from './sexos/sexos.module';
import { EtniasModule } from './etnias/etnias.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [EstudiantesModule, DocentesModule, SexosModule, EtniasModule, FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
