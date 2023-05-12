import { Module } from '@nestjs/common';
import { AnimeModule } from './anime/anime.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';
import { SerieModule } from './serie/serie.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    MovieModule,
    SerieModule,
    AnimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
