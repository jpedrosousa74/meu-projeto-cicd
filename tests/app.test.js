const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  
  describe('GET /', () => {
    test('should return welcome message with status 200', async () => {
      const response = await request(app).get('/');
      
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Hello, CI/CD!');
      expect(response.body).toHaveProperty('version');
      expect(response.body).toHaveProperty('timestamp');
    });

    test('should return JSON content type', async () => {
      const response = await request(app).get('/');
      
      expect(response.headers['content-type']).toMatch(/json/);
    });
  });

  describe('GET /health', () => {
    test('should return healthy status with status 200', async () => {
      const response = await request(app).get('/health');
      
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('status');
      expect(response.body.status).toBe('healthy');
      expect(response.body).toHaveProperty('uptime');
      expect(response.body).toHaveProperty('timestamp');
    });

    test('should return uptime as number', async () => {
      const response = await request(app).get('/health');
      
      expect(typeof response.body.uptime).toBe('number');
      expect(response.body.uptime).toBeGreaterThanOrEqual(0);
    });
  });

  describe('GET /info', () => {
    test('should return application information', async () => {
      const response = await request(app).get('/info');
      
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('description');
      expect(response.body).toHaveProperty('node_version');
      expect(response.body).toHaveProperty('environment');
    });

    test('should return valid Node.js version', async () => {
      const response = await request(app).get('/info');
      
      expect(response.body.node_version).toMatch(/^v\d+\.\d+\.\d+$/);
    });
  });

  describe('GET /nonexistent', () => {
    test('should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/nonexistent');
      
      expect(response.statusCode).toBe(404);
    });
  });

  describe('GET /status', () => {
  test('should return status information', async () => {
    const response = await request(app).get('/status');
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('online');
    expect(response.body).toHaveProperty('message');
  });
});
});