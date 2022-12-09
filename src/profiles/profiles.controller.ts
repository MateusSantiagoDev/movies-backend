import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly service: ProfilesService) {}

  @ApiOperation({
    summary: 'Criar um perfil'
  })
  @Post()
  create(@Body() dto: CreateProfileDto) {
    return this.service.create(dto);
  }

  @ApiOperation({
    summary: 'Visualizar todos os perfils'
  })
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @ApiOperation({
    summary: 'Buscar um perfil pelo ID'
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @ApiOperation({
    summary: 'Editar um perfil pelo ID'
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProfileDto) {
    return this.service.update(id, dto);
  }

  @ApiOperation({
    summary: 'Deletar um perfil pelo ID'
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
