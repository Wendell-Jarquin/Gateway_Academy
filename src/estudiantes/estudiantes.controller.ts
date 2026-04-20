import { Body, Controller, Inject, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ESTUDIANTE_SERVICE } from 'src/config/service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(
    @Inject(ESTUDIANTE_SERVICE) private readonly estudianteClient: ClientProxy,
  ) {}

  @Get()
  getAll() {
    return this.estudianteClient.send({ cmd: 'get_all_students' }, {});
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.estudianteClient.send({ cmd: 'get_one_student' }, id);
  }

  @Post()
  create(@Body() estudianteDto: CreateEstudianteDto) {
    return this.estudianteClient.send({ cmd: 'create_student' }, estudianteDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() estudianteDto: any) {
    return this.estudianteClient.send({ cmd: 'update_student' }, { id, ...estudianteDto });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.estudianteClient.send({ cmd: 'remove_student' }, id);
  }
}
