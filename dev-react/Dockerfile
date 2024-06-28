# Utiliser une image de base Node
FROM node:14 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Donne les permissions pour npm run build
RUN chmod +x node_modules/.bin/react-scripts

# Compiler l'application React
RUN npm run build

# Utiliser une image de serveur pour servir les fichiers statiques
FROM nginx:alpine

# Copier les fichiers de build React dans le répertoire NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]
