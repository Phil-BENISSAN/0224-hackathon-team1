import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json


app = FastAPI()

# Charger le fichier JSON
with open('app/data_final.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# -------------------------------------------------   CONFIGURATION CORS   ------------------------------------------------------

origins = [
    "http://localhost:8080",
    # Vous pouvez ajouter d'autres origines si nécessaire
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------  INSERER VOTRE CODE ICI -----------------

'''@app.get('/')
def fn_fast_api():
    return {'message': 'Welcome to the FastAPI app. Access column data by navigating to /<column_name>'}'''

# Route pour récupérer le fichier CSV en JSON
@app.get('/')
def read_root():
    return {"Pays": [data]}

# ---------------- FIN DE TON CODE ----------------


#_______________________________________________________________________________________________________________________


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')