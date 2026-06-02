import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ESTUDIANTE_SERVICE } from 'src/config/service';

@Controller('sexos')
export class SexosController {
  constructor(
    @Inject(ESTUDIANTE_SERVICE) private readonly estudianteClient: ClientProxy,
  ) {}

  @Get()
  getAll() {
    return this.estudianteClient.send({ cmd: 'get_all_sexos' }, {});
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteClient.send({ cmd: 'get_one_sexo' }, id);
  }
}
