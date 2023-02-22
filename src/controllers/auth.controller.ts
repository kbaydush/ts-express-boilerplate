import { Controller, Post } from 'routing-controllers';

@Controller()
export class AuthController {
  @Post('/login')
  index() {
    return JSON.stringify({ message: 'OK' });
  }
}
