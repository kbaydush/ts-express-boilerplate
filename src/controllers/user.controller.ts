import { Request, Response } from 'express';
import { ContentType, Controller, CurrentUser, Get, Req, Res } from 'routing-controllers';
import { User } from '@/models/user.model';
import { IUser } from '@/contracts/user';
import { HttpException } from '@/exceptions/HttpException';

@Controller()
export class UserController {
  @Get('/users/me')
  @ContentType('application/json')
  async me(@CurrentUser({ required: true }) user: IUser, @Req() req: Request, @Res() res: Response) {
    if (!user) {
      throw new HttpException(400, 'USER NOT FOUND');
    }

    return res.send({ message: 'OK!' });
  }
}
