import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FILE_SERVICE } from 'src/config/file-service';
import { lastValueFrom } from 'rxjs';

@Controller('files')
export class FilesController {
  constructor(@Inject(FILE_SERVICE) private readonly fileClient: ClientProxy) {}

  @Post('avatar/:modelId')
  async uploadAvatar(
    @Param('modelId') modelId: string,
    @Body() body: { url: string },
  ) {
    if (!body.url) throw new NotFoundException('URL no proporcionada');

    await lastValueFrom(
      this.fileClient.send({ cmd: 'save_avatar' }, {
        model_id: Number(modelId),
        file_name: body.url,
        mime: 'image/*',
      }),
    );

    return { url: body.url };
  }

  @Get('avatar/:modelId')
  async getAvatar(@Param('modelId') modelId: string) {
    let fileRecord: { file_name: string; mime: string };
    try {
      fileRecord = await lastValueFrom(
        this.fileClient.send({ cmd: 'get_avatar_by_model_id' }, Number(modelId)),
      );
    } catch {
      return { url: null };
    }
    if (!fileRecord) return { url: null };

    return { url: fileRecord.file_name };
  }

  @Delete('avatar/:modelId')
  async deleteAvatar(@Param('modelId') modelId: string) {
    try {
      await lastValueFrom(
        this.fileClient.send({ cmd: 'remove_avatar' }, Number(modelId)),
      );
    } catch {
      throw new NotFoundException('Avatar no encontrado');
    }

    return { message: 'Avatar eliminado' };
  }
}
