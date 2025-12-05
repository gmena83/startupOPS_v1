# Menatech Apps - Quick Start Guide

## 🚀 Get Your Website Live in 3 Steps

### Step 1: Get Your Activepieces URLs (30 minutes)

Log in to your Activepieces account and collect these URLs:

#### ✅ Already Configured (No Action Needed)

- **AI Focus Group**: `https://forms.fillout.com/t/41Avi3Vjtxus` ✓

#### 🔗 Webhook URLs (Copy from Activepieces)

1. **Prompt Generator**
   - Open flow: "promptGEN_V7 ESP"
   - Click "Catch Webhook" trigger
   - Copy webhook URL
   - Format: `https://cloud.activepieces.com/api/v1/webhooks/...`

2. **BrandSEO**
   - Open flow: "BrandSEO1"
   - Click "Catch Webhook" trigger
   - Copy webhook URL

#### 💬 Chat UI URLs (Get from Activepieces)

3. **ExtractStyle**
   - Open flow: "extractstylev2.2"
   - Click "Chat UI" trigger
   - Find "Share" or "Public URL"
   - Copy chatbot URL
   - Format: `https://cloud.activepieces.com/chatbots/...`

4. **Blogger**
   - Open flow: "Blogger0.7"
   - Click "Chat UI" trigger
   - Find "Share" or "Public URL"
   - Copy chatbot URL

#### 📁 Google Drive Setup

5. **Data Validation**
   - Create a Google Drive folder for PDF uploads
   - Name it: "Menatech - Data Validation Uploads"
   - Right-click → Share → Get link
   - Set to "Anyone with the link can upload"
   - Copy the folder URL

---

### Step 2: Update Website Configuration (5 minutes)

Edit the file: `js/app.js`

Find lines 12-32 and replace with your URLs:

```javascript
// AUTOMATION URLS - Replace with your actual URLs from Activepieces
const AUTOMATION_URLS = {
  // Webhooks (data sent directly from website)
  "prompt-generator": "PASTE_YOUR_WEBHOOK_URL_HERE",
  brandseo: "PASTE_YOUR_WEBHOOK_URL_HERE",

  // External Forms/UIs (user redirected to external page)
  "ai-focus-group": "https://forms.fillout.com/t/41Avi3Vjtxus", // Already configured ✓
  extractstyle: "PASTE_YOUR_CHATBOT_URL_HERE",
  blogger: "PASTE_YOUR_CHATBOT_URL_HERE",
  "data-validation": "PASTE_YOUR_GOOGLE_DRIVE_FOLDER_URL_HERE",
};
```

**Example with real URLs:**

```javascript
const AUTOMATION_URLS = {
  "prompt-generator":
    "https://cloud.activepieces.com/api/v1/webhooks/abc123xyz",
  brandseo: "https://cloud.activepieces.com/api/v1/webhooks/def456uvw",
  "ai-focus-group": "https://forms.fillout.com/t/41Avi3Vjtxus",
  extractstyle: "https://cloud.activepieces.com/chatbots/ghi789rst",
  blogger: "https://cloud.activepieces.com/chatbots/jkl012mno",
  "data-validation":
    "https://drive.google.com/drive/folders/1a2b3c4d5e6f7g8h9i0j",
};
```

**Save the file!**

---

### Step 3: Deploy to Netlify (15 minutes)

#### Option A: Drag & Drop (Easiest)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up for free (use GitHub, GitLab, or email)
3. Click "Add new site" → "Deploy manually"
4. Drag the entire `menatech-apps` folder
5. Wait for deployment (30 seconds)
6. Your site is live! 🎉

#### Option B: Connect Custom Domain

After deployment:

1. In Netlify, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `menatech.dev`
4. Follow DNS instructions
5. Add subdomain path `/Apps` in your domain settings

**Note:** DNS changes can take 24-48 hours to propagate.

---

## ✅ Testing Checklist

After deployment, test each automation:

### Webhook Automations (Test on your website)

- [ ] **Prompt Generator** - Fill form, submit, check email
- [ ] **BrandSEO** - Fill form, submit, check email

### Redirect Automations (Opens external page)

- [ ] **AI Focus Group** - Click button, Fillout form opens
- [ ] **ExtractStyle** - Click button, Chat UI opens
- [ ] **Blogger** - Click button, Chat UI opens
- [ ] **Data Validation** - Click button, Google Drive opens

### Other Features

- [ ] Language toggle (EN ↔ ES) works
- [ ] Theme toggle (Light ↔ Dark) works
- [ ] Feedback form submits successfully
- [ ] LinkedIn link opens
- [ ] Share button works
- [ ] Website is responsive on mobile

---

## 🔧 Optional: Configure Google Analytics

### Get Your Tracking ID

1. Go to [analytics.google.com](https://analytics.google.com/)
2. Create account or sign in
3. Click "Admin" → "Create Property"
4. Enter website details
5. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### Add to Website

Edit `index.html`, find line 14:

```html
<!-- Replace GA_MEASUREMENT_ID with your actual ID -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
```

Replace with:

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"
></script>
```

Also update line 18:

```javascript
gtag("config", "G-ABC123XYZ"); // Your actual Measurement ID
```

**Save and redeploy!**

---

## 📊 What Happens When Users Interact?

### Webhook Automations (Prompt Generator, BrandSEO)

1. User clicks button on your website
2. Form modal opens
3. User fills and submits
4. Data sent to Activepieces webhook
5. Activepieces processes the request
6. User receives results via email
7. You receive notification at gonzalo@menatech.cloud

### Redirect Automations (AI Focus Group, ExtractStyle, Blogger)

1. User clicks button on your website
2. New tab opens with external form/chat
3. User interacts with Fillout or Chat UI
4. Activepieces processes in background
5. User receives results via email
6. You receive notification at gonzalo@menatech.cloud

### File Upload (Data Validation)

1. User clicks button on your website
2. Google Drive folder opens
3. User uploads PDF file
4. Activepieces detects new file
5. File is processed and validated
6. User receives results via email
7. You receive notification at gonzalo@menatech.cloud

---

## 🆘 Troubleshooting

### "This automation is not yet configured" alert appears

**Problem:** URL not configured or contains placeholder text  
**Solution:** Check `js/app.js` and ensure all URLs are replaced with actual values

### Webhook not receiving data

**Problem:** Webhook URL incorrect or flow not published  
**Solution:**

- Verify webhook URL is complete and correct
- Ensure flow is published in Activepieces
- Test webhook with Postman or curl first

### Fillout form doesn't open

**Problem:** Form ID incorrect or form not published  
**Solution:**

- Verify form ID: `41Avi3Vjtxus`
- Check form is published in Fillout
- Test URL directly: `https://forms.fillout.com/t/41Avi3Vjtxus`

### Chat UI doesn't open

**Problem:** Chatbot URL incorrect or not published  
**Solution:**

- Verify chatbot is published in Activepieces
- Check URL format: `https://cloud.activepieces.com/chatbots/...`
- Test URL directly in browser

### Google Drive folder not accessible

**Problem:** Sharing permissions not set correctly  
**Solution:**

- Check folder is set to "Anyone with the link"
- Verify link is complete
- Test in incognito mode

### Not receiving email notifications

**Problem:** Email configuration in Activepieces  
**Solution:**

- Check email action in each flow
- Verify email address is correct
- Check spam folder
- Test email action separately

---

## 📱 Mobile Testing

Don't forget to test on real mobile devices:

- iOS Safari
- Android Chrome
- Tablet (iPad/Android)

Check:

- Navigation works
- Buttons are clickable
- Forms are easy to fill
- Text is readable
- Images load correctly

---

## 🎯 Success Metrics to Track

Once live, monitor these in Google Analytics:

- **Page views** - How many people visit
- **Automation clicks** - Which automations are popular
- **Language preference** - EN vs ES usage
- **Theme preference** - Light vs Dark usage
- **Feedback submissions** - User engagement
- **Bounce rate** - User retention

---

## 📞 Need Help?

**Email:** gonzalo@menatech.cloud  
**Website:** [menatech.cloud](https://menatech.cloud)  
**LinkedIn:** [Menatech Cloud](https://www.linkedin.com/company/menatech-cloud/)

---

## 🎉 You're Ready!

Your automation hub is configured and ready to launch. Follow the 3 steps above and you'll be live in less than an hour!

**Estimated Total Time:** 50 minutes

- Step 1: 30 minutes (collecting URLs)
- Step 2: 5 minutes (updating config)
- Step 3: 15 minutes (deploying)

Good luck with your launch! 🚀

---

_Last updated: October 2025_
