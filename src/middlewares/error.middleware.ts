import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { logger } from '@utils/logger';

const errorMiddleware = async (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';

    // console.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    // return await res.status(status).send({ message });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
