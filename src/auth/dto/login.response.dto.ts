import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "src/users/entities/user-entity";

export class LoginResponseDto {
    @ApiProperty({
        description: "JWT gerado pelo login",
        example: "",
    })
    token: string;

    @ApiProperty({
        description: "Dados do usuário autenticado",
        example: "",
    })
    user: UserEntity;
}