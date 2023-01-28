import App from '@/app';
import { IndexController } from '@controllers/index.controller';
import { VaccineController } from '@/controllers/vaccine.controller';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([IndexController, VaccineController]);
app.listen();
