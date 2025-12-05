# 🚀 Quick Deployment Checklist

## ✅ Pre-Deployment (DONE)

- [x] Frontend merged into monorepo
- [x] Netlify configuration created (`netlify.toml`)
- [x] API proxy configured in Vite
- [x] Build tested successfully
- [x] Dependencies installed

## 📋 Deploy Now - 3 Easy Steps

### Step 1: Get Your Resend API Key

1. Go to https://resend.com
2. Sign up or log in
3. Navigate to API Keys
4. Create a new API key
5. Copy it (you'll need it in Step 3)

### Step 2: Connect to Netlify

**Option A: Via CLI (Fastest)**

```bash
# Login to Netlify
npx netlify login

# Initialize site (creates new or links existing)
npx netlify init

# Follow prompts:
# - Create & configure a new site
# - Team: Select your team
# - Site name: Choose a name (e.g., startupops-v1)
# - Build command: npm run build
# - Publish directory: frontend/dist
# - Functions directory: menatech-apps/netlify/functions
```

**Option B: Via Dashboard**

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select repository: `gmena83/startupOPS_v1`
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
   - Functions directory: `menatech-apps/netlify/functions`

### Step 3: Set Environment Variables

**Via CLI:**

```bash
# Set your Resend API key
npx netlify env:set RESEND_API_KEY "your_actual_key_here"

# Set Node version
npx netlify env:set NODE_VERSION "18"
```

**Via Dashboard:**

1. Go to Site settings → Environment variables
2. Click "Add a variable"
3. Add these:
   - Key: `RESEND_API_KEY`, Value: `your_actual_key_here`
   - Key: `NODE_VERSION`, Value: `18`

### Step 4: Deploy! 🎉

```bash
# Deploy to production
npm run deploy
```

Or push to GitHub (if using Dashboard method):

```bash
git add .
git commit -m "Deploy full-stack integrated app"
git push origin main
```

## 🎯 After Deployment

1. **Get your site URL** (e.g., `https://startupops-v1.netlify.app`)

2. **Test it:**
   - Visit your site URL
   - Navigate through the app
   - Test the contact/feedback form

3. **(Optional) Set custom domain:**
   ```bash
   npx netlify domains:add yourdomain.com
   ```

## 🧪 Local Testing Before Deploy

```bash
# Test full integration locally
npm run dev

# Access at http://localhost:8080
# API functions at http://localhost:8888/.netlify/functions/
```

## 📝 Important Files

- `netlify.toml` - Deployment configuration
- `DEPLOYMENT.md` - Full deployment guide
- `.env.example` - Environment variables template
- `package.json` - Build scripts

## 🆘 Quick Troubleshooting

**Build fails?**

```bash
# Test locally first
npm run build
```

**API not working?**

- Check environment variables are set in Netlify
- Verify RESEND_API_KEY is correct
- Check function logs in Netlify dashboard

**Need help?**

- See `DEPLOYMENT.md` for detailed guide
- Check Netlify build logs in dashboard

## 🎊 You're Ready!

Current status: **READY TO DEPLOY** ✅

Just run:

```bash
npx netlify init    # First time only
npm run deploy      # Deploy to production
```

---

**Need detailed instructions?** See `DEPLOYMENT.md`
