# StartupOPS v1 - Deployment Guide

## 🚀 Quick Deployment to Netlify

### Prerequisites

- Netlify account
- Git repository connected to GitHub
- Resend API key (for email functionality)

## Step-by-Step Deployment

### 1. Install Dependencies

```bash
# Install root dependencies (including Netlify CLI)
npm install

# Install all workspace dependencies
npm run install:all
```

### 2. Set Up Environment Variables

Create `.env` file in the root directory:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

### 3. Test Locally

```bash
# Run full-stack app locally with Netlify Dev
npm run dev

# This will:
# - Start frontend at http://localhost:8080
# - Start backend functions at http://localhost:8888
# - Proxy API calls from frontend to backend
```

Access the app at `http://localhost:8080`

### 4. Deploy to Netlify

#### Option A: Using Netlify CLI (Recommended)

```bash
# Login to Netlify
npx netlify login

# Link to existing site or create new one
npx netlify link

# Set environment variables on Netlify
npx netlify env:set RESEND_API_KEY your_actual_api_key_here

# Deploy to production
npm run deploy
```

#### Option B: Using Netlify Dashboard

1. **Connect Repository**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select `gmena83/startupOPS_v1`

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
   - Functions directory: `menatech-apps/netlify/functions`

3. **Set Environment Variables**
   - Go to Site settings → Environment variables
   - Add: `RESEND_API_KEY` with your API key
   - Add: `NODE_VERSION` with value `18`

4. **Deploy**
   - Click "Deploy site"

### 5. Post-Deployment

After deployment, update your API URL:

1. Get your Netlify site URL (e.g., `https://your-app.netlify.app`)
2. Add environment variable in Netlify dashboard:
   - `VITE_API_URL`: `https://your-app.netlify.app/api`
3. Redeploy the site

## 📁 Deployment Architecture

```
Netlify Hosting
├── Frontend (React + Vite)
│   └── Serves from: frontend/dist
│   └── Routes: /* → index.html (SPA routing)
│
└── Backend (Serverless Functions)
    └── Located: menatech-apps/netlify/functions
    └── Routes: /api/* → /.netlify/functions/*
```

## 🔧 Configuration Files

- **`netlify.toml`** - Netlify build and deploy configuration
- **`frontend/vite.config.ts`** - Vite build settings with API proxy
- **`package.json`** - Monorepo scripts and dependencies
- **`.env.example`** - Template for environment variables

## 🌐 URL Structure

After deployment:

- **Main App**: `https://your-app.netlify.app`
- **API Endpoints**: `https://your-app.netlify.app/api/send-feedback`

## 🧪 Testing the Deployment

### Test API Endpoint

```bash
curl -X POST https://your-app.netlify.app/api/send-feedback \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Testing the API"
  }'
```

### Test Frontend

1. Open `https://your-app.netlify.app`
2. Navigate through the app
3. Test the contact/feedback form

## 🔄 Continuous Deployment

Netlify automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Your changes"
git push origin main

# Netlify will automatically:
# 1. Build the frontend
# 2. Deploy functions
# 3. Update your site
```

## 📊 Monitoring

- **Build logs**: Netlify Dashboard → Deploys → Deploy log
- **Function logs**: Netlify Dashboard → Functions → Function logs
- **Analytics**: Netlify Dashboard → Analytics

## 🐛 Troubleshooting

### Build Fails

```bash
# Test build locally first
npm run build

# Check logs in Netlify dashboard
# Ensure all dependencies are in package.json
```

### API Not Working

1. Check environment variables are set in Netlify
2. Verify function path: `menatech-apps/netlify/functions`
3. Check function logs in Netlify dashboard
4. Test endpoint directly: `https://your-app.netlify.app/.netlify/functions/send-feedback`

### CORS Errors

- Functions already include CORS headers
- If issues persist, check `menatech-apps/netlify/functions/send-feedback.js`

## 🔐 Environment Variables

Required in Netlify:

| Variable         | Description                 | Example                            |
| ---------------- | --------------------------- | ---------------------------------- |
| `RESEND_API_KEY` | API key for email service   | `re_xxxxx`                         |
| `NODE_VERSION`   | Node.js version             | `18`                               |
| `VITE_API_URL`   | API endpoint URL (optional) | `https://your-app.netlify.app/api` |

## 🎯 Next Steps

1. ✅ Deploy to Netlify
2. ✅ Test all functionality
3. ✅ Set up custom domain (optional)
4. ✅ Enable Netlify Analytics
5. ✅ Set up form notifications
6. ✅ Configure deploy previews for PRs

## 📝 Useful Commands

```bash
# Development
npm run dev                 # Full-stack local development
npm run dev:frontend        # Frontend only
npm run dev:backend         # Backend functions only

# Building
npm run build               # Build for production
npm run preview:frontend    # Preview built frontend

# Deployment
npm run deploy              # Deploy to production
npm run deploy:preview      # Deploy preview

# Maintenance
npm run install:all         # Install all dependencies
npm run lint                # Lint frontend code
```

## 🆘 Support

- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev

---

**Ready to deploy?** Run `npm run dev` to test locally, then `npm run deploy` to go live! 🚀
