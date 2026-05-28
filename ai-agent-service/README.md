# AI Agent Service

Core AI resolution engine for Helply. Processes customer support tickets using LLM inference, retrieves relevant knowledge base articles via vector similarity search, and generates contextual responses.

**Stack:** Python 3.11, FastAPI, LangChain, ChromaDB, OpenAI GPT-4

**Run locally:** `python -m uvicorn src.main:app --reload --port 8001`