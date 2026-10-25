"""API de l'assistant de recherche d'emploi (étape 1 : API minimale).

Lancer :  uvicorn main:app --reload
Docs interactives :  http://localhost:8000/docs
"""
from datetime import datetime, timezone

from fastapi import FastAPI

app = FastAPI(title="Assistant de recherche d'emploi IA", version="0.1.0")


@app.get("/api/health")
def health():
    """Vérifie que l'API répond. Le front l'appelle au démarrage."""
    return {"status": "ok", "heure": datetime.now(timezone.utc).isoformat()}


@app.get("/api/bonjour")
def bonjour(nom: str = "Boris"):
    """Exemple d'endpoint avec un paramètre : /api/bonjour?nom=Alice"""
    return {"message": f"Bonjour {nom}, l'API FastAPI fonctionne !"}
