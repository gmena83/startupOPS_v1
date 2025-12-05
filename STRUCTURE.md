# 🏗️ Project Structure

This repository is a **Monorepo** managed via npm workspaces. It contains two main directories:

## 📂 Root Directory

- `package.json`: Manages root dependencies and workspace scripts (install, build, dev).
- `docs/`: Documentation and guides.

## 🛠️ Workspaces

### 1. `frontend/`

**The Primary "Vibecoding" Application.**

- **Tech Stack**: React 18, Vite, TypeScript, TailwindCSS, shadcn/ui.
- **Purpose**: The user-facing dashboard and UI.
- **Key Paths**:
  - `src/components/`: Reusable UI components.
  - `src/pages/`: Main route views.
  - `src/lib/`: Utilities and API abstractions.

### 2. `menatech-apps/`

**Backend Functions & Legacy/Marketing Site.**

- **Tech Stack**: HTML/JS (Static), Netlify Functions (Node.js).
- **Purpose**: Hosts serverless functions (email, payments) and the original landing pages.
- **Key Paths**:
  - `netlify/functions/`: Serverless backend logic (e.g., `send-feedback.js`).
  - `css/` & `js/`: Static assets for the legacy site.

## 🔄 Relationships

- The **Frontend** calls functions located in `menatech-apps` (proxied via Netlify).
- Both are deployed together as a single Netlify site.
