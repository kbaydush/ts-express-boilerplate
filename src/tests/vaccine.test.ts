import request from 'supertest';
import App from '@/app';
import { PetsController } from '@controllers/vaccine.controller';
import { Pet } from '@interfaces/vaccine.interface';
import petModel from '@models/vaccine.model';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Vaccine', () => {
  // TODO
});
