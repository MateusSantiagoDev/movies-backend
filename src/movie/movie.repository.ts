import { Injectable } from "@nestjs/common";

@Injectable()
export class MovieRepository {
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<import("./entities/movie.entity").MovieEntity>) {
    throw new Error('Method not implemented.');
  }
  findOne(id: string) {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<import("./entities/movie.entity").MovieEntity[]> {
    throw new Error('Method not implemented.');
  }
  create(movie: any) {
    throw new Error('Method not implemented.');
  }

}