import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}
  create(dto: CreateProfileDto) {
    const data: Prisma.ProfilesCreateInput = {
      id: randomUUID(),
      user: {
        connect: {
          id: dto.userId,
        },
      },
      movie: {
        connect: dto.movie.map((el) => ({
          id: el,
        })),
      },
      serie: {
        connect: dto.serie.map((el) => ({
          id: el,
        })),
      },
      anime: {
        connect: dto.anime.map((el) => ({
          id: el,
        })),
      },
    };

    return this.prisma.profiles.create({
      data,
      select: {
        id: true,
        user: {
          select: {
            name: true,
          },
        },
        movie: {
          select: {
            title: true,
          },
        },
        serie: {
          select: {
            title: true,
          },
        },
        anime: {
          select: {
            title: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.profiles.findMany({
      select: {
        id: true,
        user: {
          select: {
            name: true,
            email: true,
            idade: true,
          },
        },
        movie: {
          select: {
            title: true,
            description: true,
            avaliation: true,
            image: true,
          },
        },
        serie: {
          select: {
            title: true,
            description: true,
            avaliation: true,
            image: true,
          },
        },
        anime: {
          select: {
            title: true,
            description: true,
            avaliation: true,
            image: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.profiles.findUnique({
      where: { id },
      include: {
        user: true,
        movie: true,
        serie: true,
        anime: true,
      },
    });
  }

  update(id: string, dto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  delete(id: string) {
    return `This action removes a #${id} profile`;
  }
}
