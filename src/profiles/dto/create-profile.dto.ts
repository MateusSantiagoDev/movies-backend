import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty({
    description: 'ID do usuário dono do perfil',
    example: 'cb638690-e48a-4377-b152-b12255e44ade',
  })
  userId: string;

  @ApiProperty({
    description: 'Lista de filmes que foram adicionados ao perfil',
    example:
      '["5ff8f7ab-6947-4627-966f-e33e3d38f84c", "cccf6a09-62c7-46a1-810d-54d0ca22d2a9"]',
  })
  movie: string[];

  @ApiProperty({
    description: 'Lista de series que foram adicionadas ao perfil',
    example:
      '["fb944e32-8b77-48b2-984e-b4e8d80eaee4", "9a2c236f-f1a7-42e9-9572-c7be0674151a"]',
  })
  serie: string[];

  @ApiProperty({
    description: 'Lista de animes que foram adicionados ao perfil',
    example:
      '["dd431533-f3bb-4958-924c-431463ad72da", "f4f4f299-5ff4-4a43-bc10-9523d49a291f"]',
  })
  anime: string[];
}