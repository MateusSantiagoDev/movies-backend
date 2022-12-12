import { AnimeEntity } from 'src/anime/entities/anime.entity';
import { MovieEntity } from 'src/movie/entities/movie.entity';
import { SerieEntity } from 'src/serie/entities/serie.entity';

export class ProfileEntity {
  id: string;
  userId?: string;
  movie?: MovieEntity[];
  serie?: SerieEntity[];
  anime?: AnimeEntity[];
}
