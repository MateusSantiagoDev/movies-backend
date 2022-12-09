import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/utils/exceptions/exception.class';
import { Exception } from 'src/utils/exceptions/exceptions';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  constructor(private readonly repository: MovieRepository) {}
  async create(dto: CreateMovieDto): Promise<MovieEntity> {
    const movie: MovieEntity = { ...dto, id: randomUUID() };
    const newMovie = await this.repository.create(movie);
    if (!newMovie) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
    return newMovie;
  }

  async findAll(): Promise<MovieEntity[]> {
    return await this.repository.findAll();
  }

  async findOne(id: string): Promise<MovieEntity> {
    const unique = await this.repository.findOne(id);
    if (!unique) {
      throw new Exceptions(Exception.NotFoundData);
    }
    return unique;
  }

  async update(id: string, dto: UpdateMovieDto): Promise<MovieEntity> {
    await this.findOne(id);
    const data: Partial<MovieEntity> = { ...dto };
    const movie = await this.repository.update(id, data);
    if (!movie) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
    return movie;
  }

  async delete(id: string): Promise<MovieEntity> {
    await this.findOne(id);
    const movie = await this.repository.delete(id);
    if (!movie) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
    return movie;
  }
}
