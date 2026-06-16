import { Module } from '@nestjs/common';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { SexosModule } from './sexos/sexos.module';
import { EtniasModule } from './etnias/etnias.module';

@Module({
  imports: [EstudiantesModule, SexosModule, EtniasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
