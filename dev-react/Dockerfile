# Dockerfile.vite-react
# ETAPE 1 : SELECTION DE L'IMAGE DE BASE
FROM node:18-alpine
# Espace de travail
WORKDIR /app
# ETAPE 2 : COPIE DU FICHIER DANS L'IMAGE
COPY package*.json ./
# ETAPE 3 : INSTALLATION DES DEPENDANCES & MISE A JOUR DES PACKAGES
RUN npm install
COPY . .
# ______________________________________________________________________________________________________________________
EXPOSE 8080
# Commande pour démarrer vite
CMD [ "npm", "run", "dev" ]
# This should be good enough to run our development environment. 
# But for serving the build, we need to change it a bit(look for the newer version).
# This is the newer version
# FROM node:18-alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install
# RUN npm i -g serve
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD [ "serve", "-s", "dist" ]