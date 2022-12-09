import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'Servidor rodando em http://localhost:3001';
  }
}
