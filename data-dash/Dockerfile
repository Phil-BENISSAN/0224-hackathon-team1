# Dockerfile.fastapi

# ETAPE 1 : SELECTION DE L'IMAGE DE BASE
FROM python:3.9-slim

# Espace de travail
WORKDIR /app

# ETAPE 2 : COPIE DE TOUS LES FICHIERS DANS L'IMAGE
COPY . /app /app


# ETAPE 3 : INSTALLATION DES DEPENDANCES & MISE A JOUR DES PACKAGES
RUN pip install -r requirements.txt

    # Bonne pratique : commandes RUN combinées 
RUN apt-get update && apt-get install -y 

    # Supprimer les caches de package :
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

    # Supprimer les fichiers temporaires :
RUN rm -rf /tmp/*

    # Supprimer les logs :
RUN rm -rf /var/log/*

    # Supprimer les caches de langage  E
RUN apt-get autoremove -y && apt-get clean && rm -rf /var/lib/apt/lists/* \ /var/cache/apt/archives/* /tmp/* /var/tmp/*


# ______________________________________________________________________________________________________________________


# Exposer le port utilisé par Dash
EXPOSE 8050

# Lancer l'application FastAPI
CMD ["python", "./app/main.py", "--host", "0.0.0.0", "--port", "8050"]