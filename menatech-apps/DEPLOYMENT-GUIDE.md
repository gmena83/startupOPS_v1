# Menatech Apps - Deployment & Configuration Guide

## Table of Contents

1. [Quick Start](#quick-start)
2. [Google Analytics Setup](#google-analytics-setup)
3. [Activepieces Integration](#activepieces-integration)
4. [Domain Deployment](#domain-deployment)
5. [Testing Checklist](#testing-checklist)
6. [Troubleshooting](#troubleshooting)

---

## Quick Start

### What You Have

Your Menatech Apps website is now ready! The package includes:

- **index.html** - Main website file
- **css/styles.css** - All styling with light/dark theme support
- **js/app.js** - Interactive functionality and automation triggers
- **images/menatech-logo.png** - Your brand logo

### Features Included

✅ 6 automation blocks with descriptions  
✅ Bilingual support (English/Spanish)  
✅ Light/Dark mode toggle  
✅ Responsive design (mobile-friendly)  
✅ Feedback form  
✅ Social sharing capabilities  
✅ Google Analytics integration (needs configuration)  
✅ Email notifications (needs configuration)  
✅ Activepieces webhook integration (needs configuration)

---

## Google Analytics Setup

Google Analytics 4 (GA4) is the latest version. Follow these steps to set it up:

### Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or **"Admin"** (gear icon at bottom left)
3. Click **"Create Account"**
4. Enter account name: **"Menatech"**
5. Configure data sharing settings (recommended to keep all checked)
6. Click **"Next"**

### Step 2: Create a Property

1. Property name: **"Menatech Apps"**
2. Select your timezone: Choose your location
3. Select currency: Choose your preferred currency
4. Click **"Next"**

### Step 3: Set Up Business Information

1. Select your industry category: **"Technology"** or **"Professional Services"**
2. Select business size: Choose appropriate size
3. Select how you plan to use Google Analytics
4. Click **"Create"**
5. Accept the Terms of Service

### Step 4: Set Up Data Stream

1. Choose platform: **"Web"**
2. Enter website URL: **"https://menatech.dev"** (or your actual domain)
3. Stream name: **"Menatech Apps Website"**
4. Click **"Create stream"**

### Step 5: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. **COPY THIS ID** - you'll need it in the next step

### Step 6: Add Measurement ID to Your Website

1. Open the file: **index.html**
2. Find this line (around line 14):
   ```html
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
   ></script>
   ```
3. Replace **`GA_MEASUREMENT_ID`** with your actual Measurement ID (appears twice)

   **Example:**

   ```html
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"
   ></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag("js", new Date());
     gtag("config", "G-ABC123XYZ"); <!-- Replace here too -->
   </script>
   ```

### Step 7: Verify Installation

1. Save the **index.html** file
2. Deploy your website (see Domain Deployment section)
3. Visit your website
4. Go back to Google Analytics
5. Click on **"Realtime"** in the left sidebar
6. You should see yourself as an active user within 30 seconds

### What Gets Tracked Automatically

Your website automatically tracks:

- **Page views** - Every time someone visits
- **Theme changes** - When users switch between light/dark mode
- **Language changes** - When users switch between English/Spanish
- **Automation triggers** - When users activate any automation
- **Feedback submissions** - When users submit the feedback form
- **Share actions** - When users share the website

---

## Activepieces Integration

Activepieces is your automation platform. Here's how to connect your website to your workflows:

### Step 1: Get Webhook URLs from Activepieces

For each of your 6 automations in Activepieces:

1. Log in to [Activepieces](https://www.activepieces.com/)
2. Open your workflow (e.g., "Data Validation")
3. The first step should be a **Webhook trigger**
4. Click on the Webhook trigger
5. Copy the **Webhook URL** (it looks like: `https://cloud.activepieces.com/api/v1/webhooks/...`)
6. Repeat for all 6 automations

### Step 2: Add Webhook URLs to Your Website

1. Open the file: **js/app.js**
2. Find the section at the top (around line 12):
   ```javascript
   const AUTOMATION_WEBHOOKS = {
     "data-validation": "YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE",
     "prompt-generator": "YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE",
     brandseo: "YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE",
     "ai-focus-group": "YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE",
     extractstyle: "YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE",
     blogger: "YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE",
   };
   ```
3. Replace each `'YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE'` with the actual webhook URL

   **Example:**

   ```javascript
   const AUTOMATION_WEBHOOKS = {
     "data-validation":
       "https://cloud.activepieces.com/api/v1/webhooks/abc123...",
     "prompt-generator":
       "https://cloud.activepieces.com/api/v1/webhooks/def456...",
     // ... and so on
   };
   ```

### Step 3: Configure Activepieces Workflows to Send Emails

Each workflow should:

1. **Receive webhook data** (already configured as trigger)
2. **Process the automation** (your existing logic)
3. **Send email to user** with results
   - Use the **"Send Email"** action
   - To: `{{trigger.email}}` (the user's email from the form)
   - Subject: Customize per automation
   - Body: Include the results

4. **Send notification to you**
   - Add another **"Send Email"** action
   - To: `gonzalo@menatech.cloud`
   - Subject: "New [Automation Name] Request"
   - Body: Include user's email and submitted data

### Step 4: Test the Integration

1. Save **js/app.js**
2. Deploy your website
3. Visit your website
4. Click on any automation
5. Fill out the form
6. Submit
7. Check Activepieces to see if the webhook was received
8. Verify emails are sent correctly

---

## Domain Deployment

You want to deploy this to **menatech.dev/Apps**. Here are different deployment options:

### Option 1: GitHub Pages (Recommended for Prototype)

**Pros:** Free, easy, fast  
**Cons:** Limited to static sites (perfect for this project)

#### Steps:

1. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Create a new repository**
   - Click the **"+"** icon (top right) → **"New repository"**
   - Repository name: **"menatech-apps"**
   - Make it **Public**
   - Click **"Create repository"**

3. **Upload your files**
   - Click **"uploading an existing file"**
   - Drag and drop all files from the `menatech-apps` folder
   - Click **"Commit changes"**

4. **Enable GitHub Pages**
   - Go to repository **Settings**
   - Scroll to **"Pages"** section (left sidebar)
   - Under **"Source"**, select **"main"** branch
   - Click **"Save"**
   - Your site will be live at: `https://[your-username].github.io/menatech-apps/`

5. **Connect to your domain**
   - In the **"Pages"** settings, find **"Custom domain"**
   - Enter: **"menatech.dev"**
   - Click **"Save"**
   - Go to your domain registrar (where you bought menatech.dev)
   - Add a **CNAME record**:
     - Name: `www` or `@`
     - Value: `[your-username].github.io`
   - Wait 24-48 hours for DNS propagation

### Option 2: Netlify (Easiest, Recommended)

**Pros:** Very easy, free, automatic HTTPS, custom domain support  
**Cons:** None for this use case

#### Steps:

1. **Create a Netlify account**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up for free (can use GitHub account)

2. **Deploy your site**
   - Click **"Add new site"** → **"Deploy manually"**
   - Drag and drop the entire `menatech-apps` folder
   - Wait for deployment (takes 30 seconds)
   - Your site is live at: `https://random-name.netlify.app`

3. **Connect your custom domain**
   - Click **"Domain settings"**
   - Click **"Add custom domain"**
   - Enter: **"menatech.dev"** or **"apps.menatech.dev"**
   - Follow the DNS configuration instructions provided
   - Netlify will automatically provide HTTPS

4. **Set up subdirectory (for menatech.dev/Apps)**
   - If you want it at `/Apps` instead of the root:
   - You'll need to deploy the main site separately
   - Or use redirects (Netlify supports this)

### Option 3: Your Existing Hosting

If you already have hosting for menatech.dev:

1. **Connect via FTP/SFTP**
   - Use FileZilla or your hosting's file manager
   - Navigate to your website's root directory

2. **Create Apps folder**
   - Create a folder named `Apps` (or `apps`)
   - Upload all files from `menatech-apps` into this folder

3. **Access your site**
   - Visit: `https://menatech.dev/Apps/`

### Option 4: Vercel (Alternative to Netlify)

Similar to Netlify, very easy:

1. Go to [vercel.com](https://vercel.com)
2. Sign up for free
3. Click **"Add New"** → **"Project"**
4. Import from GitHub or drag & drop files
5. Configure custom domain in settings

---

## Testing Checklist

Before going live, test everything:

### Visual Testing

- [ ] Logo displays correctly
- [ ] All 6 automation cards are visible
- [ ] Light mode looks good
- [ ] Dark mode looks good
- [ ] Mobile view is responsive
- [ ] Tablet view is responsive
- [ ] Desktop view is responsive

### Functionality Testing

- [ ] Language toggle works (EN ↔ ES)
- [ ] Theme toggle works (Light ↔ Dark)
- [ ] Share button works
- [ ] LinkedIn link opens correctly
- [ ] All automation buttons open modals
- [ ] Modal close button works
- [ ] Clicking outside modal closes it

### Form Testing

- [ ] Data Validation form opens and submits
- [ ] Prompt Generator form opens and submits
- [ ] BrandSEO form opens and submits
- [ ] AI Focus Group form opens and submits
- [ ] ExtractStyle form opens and submits
- [ ] Blogger form opens and submits
- [ ] Feedback form submits correctly
- [ ] Email validation works on all forms
- [ ] Required fields are enforced

### Integration Testing

- [ ] Google Analytics tracks page views
- [ ] Activepieces receives webhook data
- [ ] User receives email with results
- [ ] You receive notification emails
- [ ] Success messages display correctly
- [ ] Error messages display correctly

### Cross-Browser Testing

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac/iOS)
- [ ] Mobile browsers

---

## Troubleshooting

### Issue: Google Analytics not tracking

**Solution:**

1. Check that you replaced `GA_MEASUREMENT_ID` in **both** places in index.html
2. Clear your browser cache
3. Wait 24-48 hours for data to appear in reports (Realtime should work immediately)
4. Make sure you're not using an ad blocker

### Issue: Activepieces webhook not receiving data

**Solution:**

1. Verify webhook URLs are correct in `js/app.js`
2. Check Activepieces webhook logs for errors
3. Make sure the webhook trigger is enabled in Activepieces
4. Test webhook manually using Postman or curl

### Issue: Forms not submitting

**Solution:**

1. Open browser console (F12) and check for errors
2. Verify all required fields are filled
3. Check internet connection
4. Make sure JavaScript is enabled

### Issue: Website not displaying on custom domain

**Solution:**

1. Verify DNS records are correct (use [dnschecker.org](https://dnschecker.org))
2. Wait 24-48 hours for DNS propagation
3. Clear browser cache
4. Try accessing in incognito/private mode
5. Check hosting provider's documentation

### Issue: Emails not being sent

**Solution:**

1. For feedback form: FormSubmit requires email verification on first use
2. Check spam/junk folder
3. Verify email addresses are correct in `js/app.js`
4. For Activepieces: Check email action configuration in your workflows

### Issue: Dark mode not working

**Solution:**

1. Clear browser cache and localStorage
2. Check browser console for JavaScript errors
3. Verify `js/app.js` is loaded correctly

### Issue: Language toggle not working

**Solution:**

1. Clear browser cache and localStorage
2. Verify all elements have both `data-en` and `data-es` attributes
3. Check browser console for errors

---

## Support

If you encounter issues not covered in this guide:

1. **Check browser console** (F12 → Console tab) for error messages
2. **Review the code** - all files are well-commented
3. **Contact support** - Email gonzalo@menatech.cloud with:
   - Description of the issue
   - Browser and device information
   - Screenshots if applicable
   - Any error messages from the console

---

## Next Steps

After deployment:

1. **Monitor Analytics** - Check Google Analytics weekly to see user behavior
2. **Gather Feedback** - Review feedback form submissions regularly
3. **Optimize Workflows** - Based on user data, improve your Activepieces automations
4. **Add More Automations** - You can easily add more automation cards
5. **Custom Branding** - Adjust colors, fonts, and styles in `css/styles.css`

---

**Congratulations!** Your Menatech Apps website is ready to launch. Follow the deployment steps, configure the integrations, and you'll be live in no time!

For questions or custom development needs, contact: **gonzalo@menatech.cloud**
