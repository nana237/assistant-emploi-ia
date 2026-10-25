# Assistant de recherche d'emploi IA

Projet portfolio : un assistant qui collecte des offres d'emploi, les analyse avec un LLM et aide à préparer des candidatures (CV et lettre adaptés), avec un humain dans la boucle : rien n'est envoyé sans validation.

Stack : React (Vite) · FastAPI · PostgreSQL · LLM / agents / RAG.

## Étapes

1. **Bases** : API FastAPI minimale + front React qui l'appelle. ✅
2. Offres : collecte (jobdrop) → PostgreSQL, liste dans React.
3. Analyse des offres par LLM (compétences, niveau, résumé en JSON).
4. CV et lettre adaptés (RAG + agent, validation humaine).
5. Tableau de bord : statistiques SQL, graphiques, suivi des candidatures.
6. Finition : documentation, déploiement, vidéo de démo.

## Lancer le projet en local

Prérequis : Python 3.12, Node.js 20+.

**Backend** (terminal 1) :

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

API sur http://localhost:8000, documentation interactive sur http://localhost:8000/docs.

**Frontend** (terminal 2) :

```powershell
cd frontend
npm install
npm run dev
```

Page sur http://localhost:5173. En développement, Vite redirige les appels `/api/...` vers FastAPI (voir `frontend/vite.config.js`).

## Structure

```
backend/    API FastAPI (main.py)
frontend/   Application React (Vite)
```
