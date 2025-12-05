# Menatech Apps - Activepieces Integration Configuration

## Overview

Based on your actual Activepieces automation JSON files, here's how each automation should be integrated with your website:

---

## Automation Integration Summary

| Automation           | Trigger Type | Integration Method               |
| -------------------- | ------------ | -------------------------------- |
| **Data Validation**  | Google Drive | Redirect to Google Drive upload  |
| **Prompt Generator** | Webhook      | Direct webhook from website form |
| **BrandSEO**         | Webhook      | Direct webhook from website form |
| **AI Focus Group**   | Fillout Form | Redirect to Fillout form         |
| **ExtractStyle**     | Chat UI      | Redirect to Activepieces Chat UI |
| **Blogger**          | Chat UI      | Redirect to Activepieces Chat UI |

---

## Detailed Configuration

### 1. Data Validation

**Current Trigger:** Google Drive - New File  
**Integration Method:** Redirect to Google Drive folder

**What you need:**

1. Create a dedicated Google Drive folder for uploads
2. Share the folder publicly or with specific users
3. Add the folder link to the website button

**Website Button Action:**

- Opens Google Drive folder in new tab
- User uploads PDF file
- Activepieces detects new file and processes it

---

### 2. Prompt Generator ✅

**Current Trigger:** Webhook (catch_webhook)  
**Integration Method:** Direct webhook from website form

**What you need:**

1. Get webhook URL from your Activepieces flow
2. Add it to `js/app.js` configuration

**Status:** ✅ Already configured in website - just needs webhook URL

---

### 3. BrandSEO ✅

**Current Trigger:** Webhook (catch_webhook)  
**Integration Method:** Direct webhook from website form

**What you need:**

1. Get webhook URL from your Activepieces flow
2. Add it to `js/app.js` configuration

**Status:** ✅ Already configured in website - just needs webhook URL

---

### 4. AI Focus Group

**Current Trigger:** Fillout Forms (Form ID: 41Avi3Vjtxus)  
**Integration Method:** Redirect to Fillout form

**Fillout Form URL:** `https://forms.fillout.com/t/41Avi3Vjtxus`

**What you need:**

- Nothing! The form is already created
- Website button will open this Fillout form

**Note:** Fillout forms have their own UI and email collection, which is then sent to Activepieces

---

### 5. ExtractStyle

**Current Trigger:** Activepieces Chat UI (Bot Name: "AI Bot")  
**Integration Method:** Redirect to Activepieces Chat UI

**What you need:**

1. Get the Chat UI URL from your Activepieces flow
2. Format: `https://cloud.activepieces.com/chatbots/[CHATBOT_ID]`

**How to find it:**

1. Open ExtractStyle flow in Activepieces
2. Click on the Chat UI trigger
3. Look for "Share" or "Public URL"
4. Copy the chatbot URL

---

### 6. Blogger

**Current Trigger:** Activepieces Chat UI (Bot Name: "Blog Writer")  
**Integration Method:** Redirect to Activepieces Chat UI

**What you need:**

1. Get the Chat UI URL from your Activepieces flow
2. Format: `https://cloud.activepieces.com/chatbots/[CHATBOT_ID]`

**How to find it:**

1. Open Blogger flow in Activepieces
2. Click on the Chat UI trigger
3. Look for "Share" or "Public URL"
4. Copy the chatbot URL

---

## Configuration Steps

### Step 1: Get Your URLs from Activepieces

Log in to Activepieces and collect these URLs:

1. **Prompt Generator Webhook:**
   - Open "promptGEN_V7 ESP" flow
   - Click on "Catch Webhook" trigger
   - Copy the webhook URL
   - Format: `https://cloud.activepieces.com/api/v1/webhooks/...`

2. **BrandSEO Webhook:**
   - Open "BrandSEO1" flow
   - Click on "Catch Webhook" trigger
   - Copy the webhook URL

3. **AI Focus Group:**
   - Already have it: `https://forms.fillout.com/t/41Avi3Vjtxus`

4. **ExtractStyle Chat UI:**
   - Open "extractstylev2.2" flow
   - Click on "Chat UI" trigger
   - Find "Share" or "Public URL" option
   - Copy the chatbot URL

5. **Blogger Chat UI:**
   - Open "Blogger0.7" flow
   - Click on "Chat UI" trigger
   - Find "Share" or "Public URL" option
   - Copy the chatbot URL

6. **Data Validation Google Drive:**
   - Create a Google Drive folder
   - Set permissions (public or specific users)
   - Copy the folder sharing link

### Step 2: Update Website Configuration

Edit `/home/ubuntu/menatech-apps/js/app.js`:

Find this section (around line 12):

```javascript
const AUTOMATION_WEBHOOKS = {
  "data-validation": "YOUR_GOOGLE_DRIVE_FOLDER_URL",
  "prompt-generator": "YOUR_WEBHOOK_URL",
  brandseo: "YOUR_WEBHOOK_URL",
  "ai-focus-group": "https://forms.fillout.com/t/41Avi3Vjtxus",
  extractstyle: "YOUR_CHATBOT_URL",
  blogger: "YOUR_CHATBOT_URL",
};
```

Replace with your actual URLs:

```javascript
const AUTOMATION_WEBHOOKS = {
  "data-validation": "https://drive.google.com/drive/folders/YOUR_FOLDER_ID",
  "prompt-generator":
    "https://cloud.activepieces.com/api/v1/webhooks/ABC123...",
  brandseo: "https://cloud.activepieces.com/api/v1/webhooks/DEF456...",
  "ai-focus-group": "https://forms.fillout.com/t/41Avi3Vjtxus",
  extractstyle: "https://cloud.activepieces.com/chatbots/GHI789...",
  blogger: "https://cloud.activepieces.com/chatbots/JKL012...",
};
```

### Step 3: Update Integration Types

The website needs to know which automations use webhooks vs redirects.

Add this configuration in `js/app.js` (after AUTOMATION_WEBHOOKS):

```javascript
const AUTOMATION_TYPES = {
  "data-validation": "redirect", // Opens Google Drive
  "prompt-generator": "webhook", // Sends data via webhook
  brandseo: "webhook", // Sends data via webhook
  "ai-focus-group": "redirect", // Opens Fillout form
  extractstyle: "redirect", // Opens Chat UI
  blogger: "redirect", // Opens Chat UI
};
```

---

## Updated Website Behavior

### For Webhook Automations (Prompt Generator, BrandSEO)

1. User clicks button
2. Modal opens with form
3. User fills form and submits
4. Data sent directly to Activepieces webhook
5. Success message shown
6. User receives email with results

### For Redirect Automations (AI Focus Group, ExtractStyle, Blogger)

1. User clicks button
2. New tab opens with external form/chat UI
3. User interacts with Fillout form or Chat UI
4. Activepieces processes in background
5. User receives email with results

### For Google Drive (Data Validation)

1. User clicks button
2. New tab opens with Google Drive folder
3. User uploads PDF file
4. Activepieces detects new file
5. File is processed
6. User receives email with results

---

## Advantages of This Hybrid Approach

### Webhooks (Prompt Generator, BrandSEO)

✅ Seamless user experience (stays on your website)  
✅ Consistent branding  
✅ Full control over form design  
✅ Better analytics tracking

### Fillout Forms (AI Focus Group)

✅ Already built and tested  
✅ Advanced form logic and validation  
✅ No need to rebuild complex forms  
✅ Fillout handles spam protection

### Chat UI (ExtractStyle, Blogger)

✅ Interactive conversational interface  
✅ Better for complex, multi-step inputs  
✅ Real-time feedback to users  
✅ Activepieces handles the UI

### Google Drive (Data Validation)

✅ Reliable file upload  
✅ Large file support  
✅ Familiar interface for users  
✅ Automatic file organization

---

## Testing Checklist

After configuration:

- [ ] **Prompt Generator** - Form submits, webhook receives data, email sent
- [ ] **BrandSEO** - Form submits, webhook receives data, email sent
- [ ] **AI Focus Group** - Button opens Fillout form correctly
- [ ] **ExtractStyle** - Button opens Chat UI correctly
- [ ] **Blogger** - Button opens Chat UI correctly
- [ ] **Data Validation** - Button opens Google Drive folder correctly

---

## Troubleshooting

### Webhook not receiving data

- Check webhook URL is correct and complete
- Verify flow is published in Activepieces
- Check browser console for errors
- Test webhook with Postman first

### Fillout form not opening

- Verify form ID is correct: `41Avi3Vjtxus`
- Check if form is published in Fillout
- Test URL directly in browser

### Chat UI not opening

- Verify chatbot is published in Activepieces
- Check if chatbot URL is public
- Ensure chatbot is enabled

### Google Drive folder not accessible

- Check folder sharing permissions
- Verify link is public or shared with users
- Test link in incognito mode

---

## Next Steps

1. ✅ Logo updated (transparent background)
2. ⏳ Collect URLs from Activepieces
3. ⏳ Update `js/app.js` with actual URLs
4. ⏳ Test each automation
5. ⏳ Deploy to production

---

## Questions?

Contact: gonzalo@menatech.cloud
