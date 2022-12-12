import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login.response.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Login de usuário',
  })
  @Post()
  login(@Body() dto: LoginDto): Promise<LoginResponseDto> {
    try {
      return this.service.login(dto)
    } catch (err) {
      exceptionhandling(err)
    }
  }
}
