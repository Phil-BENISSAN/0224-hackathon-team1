from dash import Dash, html, dcc, Input, Output
import plotly.express as px
import pandas as pd

# Création de l'application
app = Dash(__name__)

# Exemple de données
df = pd.DataFrame({
    'x': [1, 2, 3, 4, 5],
    'y': [10, 11, 12, 13, 14]
})

# Définition du layout avec un Slider
app.layout = html.Div([
    html.H1("Dashboard avec Dash"),
    dcc.Graph(id='line-graph'),
    dcc.Slider(
        id='slider',
        min=df['x'].min(),
        max=df['x'].max(),
        value=2,  # valeur initiale
        marks={str(num): str(num) for num in df['x']},
        step=None
    )
])

# Callback pour mettre à jour le graphique
@app.callback(
    Output('line-graph', 'figure'),
    [Input('slider', 'value')]
)
def update_graph(slider_value):
    # Filtrer les données en fonction du curseur
    filtered_df = df[df['x'] <= slider_value]
    fig = px.line(filtered_df, x='x', y='y', title='Graphique Simple')
    return fig

# Exécution de l'application
if __name__ == '__main__':
    app.run_server(debug=True, host='0.0.0.0')