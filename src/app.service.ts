import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getList(): string {
    const a = 0;
    const b = 0;
    const c = a + b;
    return c;
  }
  getList2() {
    return 'Hello';
  }
}
