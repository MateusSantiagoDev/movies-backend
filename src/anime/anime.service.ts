import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/utils/exceptions/exception.class';
import { Exception } from 'src/utils/exceptions/exceptions';
import { AnimeRepository } from './anime.repository';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { AnimeEntity } from './entities/anime.entity';

@Injectable()
export class AnimeService {
  constructor(private readonly repository: AnimeRepository) {}
  async create(dto: CreateAnimeDto): Promise<AnimeEntity> {
    const anime: AnimeEntity = { ...dto, id: randomUUID() };
    const newMovie = await this.repository.create(anime);
    if (!newMovie) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
    return newMovie;
  }

  async findAll(): Promise<AnimeEntity[]> {
    return await this.repository.findAll();
  }

  async findOne(id: string): Promise<AnimeEntity> {
    const unique = await this.repository.findOne(id);
    if (!unique) {
      throw new Exceptions(Exception.NotFoundData);
    }
    return unique;
  }

  async update(id: string, dto: UpdateAnimeDto): Promise<AnimeEntity> {
    await this.findOne(id);
    const data: Partial<AnimeEntity> = { ...dto };
    const anime = await this.repository.update(id, data);
    if (!anime) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
    return anime;
  }

  async delete(id: string): Promise<AnimeEntity> {
    await this.findOne(id);
    const anime = await this.repository.delete(id);
    if (!anime) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
    return anime;
  }
}
