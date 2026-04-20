import { Body, Controller, Inject, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DOCENTE_SERVICE } from 'src/config/docente-service';

@Controller('docentes')
export class DocentesController {
  constructor(
    @Inject(DOCENTE_SERVICE) private readonly docenteClient: ClientProxy,
  ) {}

  @Get()
  getAll() {
    return this.docenteClient.send({ cmd: 'get_all_docentes' }, {});
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.docenteClient.send({ cmd: 'get_one_docente' }, id);
  }

  @Post()
  create(@Body() docenteDto: any) {
    return this.docenteClient.send({ cmd: 'create_docente' }, docenteDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() docenteDto: any) {
    return this.docenteClient.send({ cmd: 'update_docente' }, { id, ...docenteDto });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.docenteClient.send({ cmd: 'remove_docente' }, id);
  }
}
