const express = require('express');
const app = express();

// Middleware para processar JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello, CI/CD!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Rota de health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Rota de informações
app.get('/info', (req, res) => {
  res.json({
    name: 'meu-projeto-cicd',
    description: 'Projeto prático de CI/CD',
    node_version: process.version,
    environment: process.env.NODE_ENV || 'development'
  });
});

// Rota de status
app.get('/status', (req, res) => {
  res.json({
    status: 'online',
    version: '1.1.0',
    message: 'Pipeline funcionando perfeitamente!'
  });
});

module.exports = app;