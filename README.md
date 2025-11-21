# Meu Projeto CI/CD

![CI/CD Pipeline](https://github.com/jpedrosousa74/meu-projeto-cicd/actions/workflows/ci-cd.yml/badge.svg)
![Docker Image Version](https://img.shields.io/docker/v/joaopntc74/meu-projeto-cicd?sort=semver)
![Docker Image Size](https://img.shields.io/docker/image-size/joaopntc74/meu-projeto-cicd/latest)

## 📝 Descrição

Projeto prático de CI/CD com Node.js, Docker e GitHub Actions.

## 🚀 Tecnologias

- Node.js 18+
- Express
- Jest
- Docker
- GitHub Actions

## 🏃 Como executar

### Localmente
\`\`\`bash
npm install
npm start
\`\`\`

### Com Docker
\`\`\`bash
docker pull joaopntc74/meu-projeto-cicd:latest
docker run -p 3000:3000 joaopntc74/meu-projeto-cicd:latest
\`\`\`

## 🧪 Testes

\`\`\`bash
npm test
\`\`\`

## 📦 Pipeline CI/CD

O projeto utiliza GitHub Actions para:
- ✅ Executar testes automaticamente
- 🐳 Criar imagem Docker
- 📤 Publicar no Docker Hub

## 📄 Licença

MIT