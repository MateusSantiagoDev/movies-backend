import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimeDto {
  @ApiProperty({
    description: 'Titulo do anime',
    example: 'Piratas do caribe',
  })
  title: string;

  @ApiProperty({
    description: 'Descrição do anime',
    example: 'Anime de aventura',
  })
  description: string;

  @ApiProperty({
    description: 'Avaliação do anime',
    example: 9.5,
  })
  avaliation: number;

  @ApiProperty({
    description: 'Imagem do anime',
    example:
      'https://lunetas.com.br/wp-content/uploads/2022/04/animes-e-criancas-portal-lunetas.jpg.webp',
  })
  image: string;
}
