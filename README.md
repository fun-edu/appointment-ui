# Appointment UI

A full-stack starter app with:

- Next.js frontend in the root app directory
- FastAPI backend in `backend/`
- MongoDB via Docker Compose for a non-SQL data store

## Stack

- Frontend: Next.js, TypeScript, React
- Backend: Python, FastAPI
- Database: MongoDB

## Local setup

1. Install Node dependencies:
   ```bash
   npm install
   ```
2. Install Python dependencies:
   ```bash
   cd backend
   python -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```
3. Start MongoDB:
   ```bash
   docker compose up -d
   ```
4. Start the backend:
   ```bash
   cd backend
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```
5. Start the frontend:
   ```bash
   npm run dev
   ```
6. Open: http://localhost:3000

## Project structure

- `app/` — Next.js app router frontend
- `backend/app/` — FastAPI application and MongoDB helpers
- `docker-compose.yml` — local MongoDB service
