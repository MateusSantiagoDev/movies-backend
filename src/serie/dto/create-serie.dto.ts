import { ApiProperty } from '@nestjs/swagger';

export class CreateSerieDto {
  @ApiProperty({
    description: 'Titulo da serie',
    example: 'O clube da meia noite',
  })
  title: string;

  @ApiProperty({
    description: 'Descrição da serie',
    example: 'serie de suspense',
  })
  description: string;

  @ApiProperty({
    description: 'Avaliação da serie',
    example: 9.5,
  })
  avaliation: number;

  @ApiProperty({
    description: 'Imagem da serie',
    example:
      'https://cdn.maioresemelhores.com/imagens/melhores-series-de-suspense-da-netflix-og.jpg',
  })
  image: string;
}
