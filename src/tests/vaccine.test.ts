import request from 'supertest';
import App from '@/app';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Vaccine', () => {
  // TODO
});
