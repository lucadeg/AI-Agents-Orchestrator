# AGENTS.md

## Cursor Cloud specific instructions

### Overview

AI Coding Tools Orchestrator — a Python/Flask backend + Vue 3 frontend system that coordinates multiple AI coding assistants. Three services compose the development environment:

| Service | Port | Start Command |
|---|---|---|
| Orchestrator Backend (Flask + Socket.IO) | 5001 | See gotcha below |
| Agentic Team Backend (Flask + Socket.IO) | 5002 | See gotcha below |
| Vue 3 Frontend (Vite dev server) | 3000 | `cd ui/frontend && npx vite --host 0.0.0.0` |

### Gotchas

- **Flask backends require `allow_unsafe_werkzeug=True`**: Both `ui/app.py` and `ui/agentic_app.py` call `socketio.run(..., debug=True)` which triggers a Werkzeug safety check that crashes the process. To start them in dev, use a wrapper:
  ```bash
  # Orchestrator backend (port 5001)
  python3 -c "
  import sys; sys.path.insert(0, '.')
  from ui.app import app, socketio, init_orchestrator
  init_orchestrator()
  socketio.run(app, host='0.0.0.0', port=5001, debug=False, allow_unsafe_werkzeug=True)
  "

  # Agentic Team backend (port 5002)
  python3 -c "
  import sys; sys.path.insert(0, '.')
  from ui.agentic_app import app, socketio, _init_engine
  _init_engine()
  socketio.run(app, host='0.0.0.0', port=5002, debug=False, allow_unsafe_werkzeug=True)
  "
  ```

- **`pip install -e .` fails** due to a malformed entry point in `setup.py`. Python modules still import correctly from the workspace root without editable install. Use `pip install -r requirements.txt` instead.

- **Cloud AI agents (codex, gemini, claude, copilot) are not available** in the Cloud VM. The orchestrator warns about this at startup but still functions. The Web UI works and reports "no executable steps" when executing tasks — this is expected. Local model backends (Ollama, llama.cpp) are also not running.

- **`/home/ubuntu/.local/bin` must be on PATH** for tools like `flake8`, `black`, `isort`, `mypy`, `bandit`, `pytest` to be found.

### Standard commands

Refer to `Makefile` for the canonical lint/test/format/build commands. Key ones:

- **Test**: `pytest tests/ -v` (127/128 pass; 1 pre-existing integration test failure in `test_stdin_communication`)
- **Lint**: `flake8 orchestrator adapters agentic_team tests ui/agentic_app.py`
- **Type check**: `mypy orchestrator adapters`
- **Format**: `black orchestrator adapters agentic_team tests ui/agentic_app.py && isort orchestrator adapters agentic_team tests ui/agentic_app.py`
- **Security**: `bandit -r orchestrator adapters agentic_team ui/agentic_app.py -c pyproject.toml`

### Health check endpoints

- Orchestrator backend: `GET http://localhost:5001/health`
- Agentic Team backend: `GET http://localhost:5002/health`
