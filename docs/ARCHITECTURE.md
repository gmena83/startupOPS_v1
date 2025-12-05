# 🏗️ Architecture & Tech Stack

## 🛠 Technology Stack

### **Frontend** (Modern React Application)

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (Lightning-fast HMR & Builds)
- **Styling**: TailwindCSS + shadcn/ui components
- **Routing**: React Router DOM 6
- **State/Caching**: TanStack Query
- **Forms**: React Hook Form + Zod validation
- **Theming**: next-themes (Dark/Light mode)

### **Backend & Infrastructure**

- **Runtime**: Node.js 18 (Serverless)
- **Platform**: Netlify Functions
- **Email**: Resend API
- **Deployment**: Netlify (Automatic CI/CD)

## 🔧 Deployment Architecture

```mermaid
graph LR
    User[User Browser] --> CDN[Netlify CDN]
    CDN --> Frontend[React SPA (frontend/)]
    CDN --> API[Netlify Functions (menatech-apps/)]
    API --> Resend[Resend Email API]
    API --> Stripe[Stripe API]
```

- **Frontend**: Built to static files (`frontend/dist`) and served via CDN.
- **Backend**: Functions in `menatech-apps/netlify/functions` are deployed as AWS Lambda functions managed by Netlify.
- **Routing**: `/api/*` requests are proxied to the serverless functions.
