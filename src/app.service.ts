import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'minha mensagem',
      status: 200
    };
  }
}
