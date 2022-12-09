import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
    delete(id: string): Promise<import("./entities/user-entity").UserEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, dto: UpdateUserDto): Promise<import("./entities/user-entity").UserEntity> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<import("./entities/user-entity").UserEntity> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<import("./entities/user-entity").UserEntity[]> {
        throw new Error("Method not implemented.");
    }
    create(dto: CreateUserDto): Promise<import("./entities/user-entity").UserEntity> {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly repository: UserRepository) {}

}