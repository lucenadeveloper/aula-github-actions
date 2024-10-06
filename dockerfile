# Use a imagem base do Node.js
FROM node:18 AS build

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o arquivo de dependências (package.json e package-lock.json)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação para o diretório de trabalho
COPY . .

# Construir a aplicação React para produção
RUN npm run build

# Usar uma imagem base leve do NGINX para servir o build
FROM nginx:alpine

# Copiar o build gerado para a pasta de arquivos estáticos do NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80 para acesso externo
EXPOSE 80

# Comando para rodar o NGINX
CMD ["nginx", "-g", "daemon off;"]
