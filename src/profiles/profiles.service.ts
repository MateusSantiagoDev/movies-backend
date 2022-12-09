import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  create(dto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  findAll() {
    return `This action returns all profiles`;
  }

  findOne(id: string) {
    return `This action returns a #${id} profile`;
  }

  update(id: string, dto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  delete(id: string) {
    return `This action removes a #${id} profile`;
  }
}
