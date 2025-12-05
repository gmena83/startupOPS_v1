# 🚀 Deploy via Netlify Dashboard

**Your Resend API Key:** `re_2SXSkssi_9HK7fMKfPPFbmvvPQcXdhRir`

## Quick Deploy Steps

### Step 1: Push to GitHub

```bash
cd d:\github\startupOPS_v1-1

# Add all changes
git add .

# Commit
git commit -m "Full-stack integration complete - ready for deployment"

# Push to GitHub
git push origin main
```

### Step 2: Configure in Netlify Dashboard

1. **Go to:** https://app.netlify.com
2. **Navigate to:** Your existing site `startupopsv1`
3. **Go to:** Site settings → Build & deploy → Configure

#### Update Build Settings:

| Setting                 | Value                             |
| ----------------------- | --------------------------------- |
| **Base directory**      | `frontend`                        |
| **Build command**       | `npm run build`                   |
| **Publish directory**   | `frontend/dist`                   |
| **Functions directory** | `menatech-apps/netlify/functions` |

#### Set Environment Variables:

1. Go to **Site settings → Environment variables**
2. Click **Add a variable**
3. Add these variables:

```bash
RESEND_API_KEY = re_2SXSkssi_9HK7fMKfPPFbmvvPQcXdhRir
NODE_VERSION = 18
```

### Step 3: Deploy

**Option A: Trigger Deploy**

- Go to **Deploys** tab
- Click **Trigger deploy** → **Deploy site**

**Option B: Auto Deploy**

- Just push to GitHub (already set up)
- Netlify will auto-deploy

---

## Alternative: Manual CLI Deploy

If you want to use CLI without linking:

```bash
# Build locally first
npm run build

# Deploy directly
npx netlify deploy --prod --dir=frontend/dist --functions=menatech-apps/netlify/functions

# When prompted:
# - Choose "Link to existing site"
# - Select "startupopsv1"
# - Confirm deployment
```

---

## After Deployment

### Test Your Site

1. **Visit:** https://startupopsv1.netlify.app
2. **Test navigation:** All pages load
3. **Test forms:** Contact form submission works
4. **Check functions:** Go to Netlify Dashboard → Functions → Logs

### Verify API Key

Check if email function works:

```bash
curl -X POST https://startupopsv1.netlify.app/api/send-feedback \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Testing deployment"
  }'
```

---

## 🔧 Troubleshooting

### Build Fails?

- Check build logs in Netlify dashboard
- Verify base directory is set to `frontend`
- Ensure environment variables are set

### Functions Not Working?

- Check environment variable `RESEND_API_KEY` is set
- Verify functions directory: `menatech-apps/netlify/functions`
- Check function logs in dashboard

### API Errors?

- Verify RESEND_API_KEY is correct
- Check CORS headers are set
- Test endpoint directly: `https://startupopsv1.netlify.app/.netlify/functions/send-feedback`

---

## ✅ Success Checklist

After deployment, verify:

- [ ] Site loads at https://startupopsv1.netlify.app
- [ ] All pages accessible
- [ ] Language toggle works
- [ ] Theme toggle works
- [ ] Contact form submits successfully
- [ ] Email arrives at gonzalo@menatech.cloud
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Analytics tracking (if configured)

---

**Ready to deploy!** 🚀

Choose your method:

1. **Recommended:** Push to GitHub + Configure dashboard
2. **Alternative:** Manual CLI deploy

Both will work - dashboard is easier with the current CLI issue.
