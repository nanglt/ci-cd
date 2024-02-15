import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getList() {
    const a = 0;
    const b = 0;
    const c = a + b;
    return 'Hello';
  }
  getList2() {
    return 'Hello';
  }
}
