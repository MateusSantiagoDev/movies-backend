import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/utils/exceptions/exception.class';
import { Exception } from 'src/utils/exceptions/exceptions';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { SerieEntity } from './entities/serie.entity';
import { SerieRepository } from './serie.repository';


@Injectable()
export class SerieService {
  constructor(private readonly repository: SerieRepository) {}
  async create(dto: CreateSerieDto): Promise<SerieEntity> {
    const serie: SerieEntity = { ...dto, id: randomUUID() };
    const newMovie = await this.repository.create(serie);
    if (!newMovie) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
    return newMovie;
  }

  async findAll(): Promise<SerieEntity[]> {
    return await this.repository.findAll();
  }

  async findOne(id: string): Promise<SerieEntity> {
    const unique = await this.repository.findOne(id);
    if (!unique) {
      throw new Exceptions(Exception.NotFoundData);
    }
    return unique;
  }

  async update(id: string, dto: UpdateSerieDto): Promise<SerieEntity> {
    await this.findOne(id);
    const data: Partial<SerieEntity> = { ...dto };
    const serie = await this.repository.update(id, data);
    if (!serie) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
    return serie;
  }

  async delete(id: string): Promise<SerieEntity> {
    await this.findOne(id);
    const serie = await this.repository.delete(id);
    if (!serie) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
    return serie;
  }
}
