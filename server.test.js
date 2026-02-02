const request = require('supertest');
const app = require('./server');

describe('API Tests', () => {
  test('GET / responds with Hello CI/CD', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello CI/CD!');
  });
});

