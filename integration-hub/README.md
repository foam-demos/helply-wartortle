# Integration Hub

Manages bidirectional sync with third-party platforms (Stripe, Gong, PostHog, HubSpot, Zendesk). Handles webhook ingestion, rate limiting, and context aggregation for AI agents.

**Stack:** Python 3.11, FastAPI, Celery, Redis, PostgreSQL

**Run locally:** `python -m uvicorn src.main:app --reload --port 8003 & celery -A src.worker worker --loglevel=info`