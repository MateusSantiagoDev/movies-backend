import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user-entity";

@Injectable()
export class UserRepository {
    delete(id: string) {
        throw new Error('Method not implemented.');
    }
    update(id: string, dto: UpdateUserDto) {
        throw new Error('Method not implemented.');
    }
    findOne(id: string) {
        throw new Error('Method not implemented.');
    }
    findAll(): UserEntity[] | PromiseLike<UserEntity[]> {
        throw new Error('Method not implemented.');
    }
    create(user: UserEntity): import("./entities/user-entity").UserEntity | PromiseLike<import("./entities/user-entity").UserEntity> {
        throw new Error("Method not implemented.");
    }

}