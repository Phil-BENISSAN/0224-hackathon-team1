import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from bs4 import BeautifulSoup as bs 
import requests
import numpy as np

df = pd.read_csv('/Users/jalte/Desktop/WCS/Hackathon/0224-hackathon-team1/data-fastapi/app/data_roulard.csv')

app = FastAPI()

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

# Créer une route pour chaque colonne du fichier CSV
for column in df.columns:
    def create_route(column_name):
        @app.get(f"/{column_name}")
        def get_column_data():
            if column_name in df.columns:
                return df[column_name].tolist()
            else:
                raise HTTPException(status_code=404, detail="Column not found")
        return get_column_data
    
    route = create_route(column)
    app.add_api_route(f"/{column}", route)
'''@app.get('/')
def fn_fast_api():



    return {'key' : 'valuesee'}'''
# Route par défaut
@app.get('/')
def fn_fast_api():
    return {'message': 'Welcome to the FastAPI app. Access column data by navigating to /<column_name>'}

# ---------------- FIN DE TON CODE ----------------


#_______________________________________________________________________________________________________________________


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')