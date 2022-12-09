import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfilesModule } from './profiles/profiles.module';
import { MovieModule } from './movie/movie.module';
import { SerieModule } from './serie/serie.module';
import { AnimeModule } from './anime/anime.module';


@Module({
  imports: [UserModule, PrismaModule, ProfilesModule, MovieModule, SerieModule, AnimeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
