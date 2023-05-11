import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieController } from './serie.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SerieRepository } from './serie.repository';

@Module({
  imports: [PrismaModule],
  controllers: [SerieController],
  providers: [SerieService, SerieRepository],
})
export class SerieModule {}
