import { HttpException } from '@exceptions/HttpException';
import { Vaccine } from '@interfaces/vaccine.interface';
import vaccineModel from '@models/vaccine.model';
import { isEmpty } from '@utils/util';

class VaccineService {
  public vaccine = vaccineModel;
}

export default VaccineService;
