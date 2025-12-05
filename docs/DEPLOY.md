# 🚀 Deployment Guide

## Prerequisites

- Node.js 18+
- Netlify CLI (`npm install -g netlify-cli`)
- Git

## Quick Start

### 1. Install Dependencies

```bash
npm install
npm run install:all
```

### 2. Local Development

- **Full Stack**: `npm run dev` (Frontend + Backend Functions)
- **Frontend Only**: `npm run dev:frontend`

### 3. Production Build

```bash
npm run build
```

This builds the frontend to `frontend/dist`.

### 4. Deploy to Netlify

```bash
# Preview
npm run deploy

# Production
npm run deploy:preview
```

## Environment Variables

Set these in Netlify Dashboard:

- `RESEND_API_KEY`: For email services.
- `CONTACT_EMAIL`: (Optional) Recipient for feedback emails.
