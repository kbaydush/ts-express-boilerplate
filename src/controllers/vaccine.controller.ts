import { Controller, Param, Body, Get, Post, Put, Delete, HttpCode, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import vaccineService from '@services/vaccine.service';
import { validationMiddleware } from '@middlewares/validation.middleware';

@Controller()
export class VaccineController {
  public vaccineService = new vaccineService();
  @Get('/vaccine-summary')
  index() {
    return JSON.stringify({ message: 'summary - OK' });
  }
}
