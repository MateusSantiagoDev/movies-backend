import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Mateus Jacinto Santiago',
  })
  name: string;

  @ApiProperty({
    description: 'CPF',
    example: '00000000000',
  })
  cpf: string;

  @ApiProperty({
    description: 'Email',
    example: 'usuario@usuario.com.br',
  })
  email: string;

  @ApiProperty({
    description: 'Idade',
    example: 32,
  })
  idade: number;

  @ApiProperty({
    description: '',
    example: '',
  })
  role: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'secret',
  })
  password: string;

  @ApiProperty({
    description: 'confirmação da senha',
    example: 'secret',
  })
  confirmPassword: string;
}
