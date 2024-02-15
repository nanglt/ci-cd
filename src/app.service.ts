import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getList(): number {
    const a = 0;
    const b = 0;
    const c = a + b;
    return c == 0;
  }
  getList2() {
    return 'Hello';
  }
}
