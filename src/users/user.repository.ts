import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exceptions } from 'src/utils/exceptions/exception.class';
import { Exception } from 'src/utils/exceptions/exceptions';
import { UserEntity } from './entities/user-entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  create(data: UserEntity): Promise<UserEntity> {
    try {
      return this.prisma.user.create({ data });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }
  findAll(): Promise<UserEntity[]> {
    try {
      return this.prisma.user.findMany();
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }
  findOne(id: string): Promise<UserEntity> {
    try {
      return this.prisma.user.findFirstOrThrow({ where: { id } });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }
  update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
    try {
      return this.prisma.user.update({ where: { id }, data });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  delete(id: string): Promise<UserEntity> {
    try {
      return this.prisma.user.delete({ where: { id } });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }
}
