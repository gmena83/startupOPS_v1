# Activepieces Webhook Configuration Guide

This guide will help you configure your Activepieces workflows to work seamlessly with the Menatech Apps website.

## Overview

Each automation on your website sends data to an Activepieces webhook. The webhook receives the data, processes it through your workflow, and sends results back to the user via email.

## Data Structure

Each automation sends different data based on its purpose. Here's what each webhook receives:

### 1. Data Validation

**Webhook receives:**

```json
{
  "email": "user@example.com",
  "file": "[File object or base64 encoded data]",
  "automation": "data-validation"
}
```

**Workflow should:**

1. Receive webhook trigger
2. Extract PDF file
3. Analyze document for statements
4. Validate statements against data sources
5. Generate validation report
6. Send report to user's email
7. Send notification to gonzalo@menatech.cloud

### 2. Prompt Generator

**Webhook receives:**

```json
{
  "email": "user@example.com",
  "platformName": "ChatGPT",
  "useCase": "Create marketing copy for social media",
  "outputFormat": "JSON",
  "automation": "prompt-generator"
}
```

**Workflow should:**

1. Receive webhook trigger
2. Analyze use case and platform
3. Generate optimized megaprompt
4. Create implementation guide
5. Send prompt and guide to user's email
6. Send notification to gonzalo@menatech.cloud

### 3. BrandSEO

**Webhook receives:**

```json
{
  "email": "user@example.com",
  "brandName": "Menatech",
  "websiteUrl": "https://menatech.cloud",
  "industry": "Technology",
  "automation": "brandseo"
}
```

**Workflow should:**

1. Receive webhook trigger
2. Analyze brand's online presence
3. Check traditional SEO metrics
4. Check AI SEO positioning
5. Generate recommendations
6. Send analysis report to user's email
7. Send notification to gonzalo@menatech.cloud

### 4. AI Focus Group

**Webhook receives:**

```json
{
  "email": "user@example.com",
  "productDescription": "AI-powered task automation platform",
  "targetSegment": "Small business owners",
  "validationQuestions": "Would they pay $50/month? What features matter most?",
  "automation": "ai-focus-group"
}
```

**Workflow should:**

1. Receive webhook trigger
2. Generate buyer personas
3. Simulate focus group discussion
4. Collect feedback and insights
5. Generate summary report
6. Send report to user's email
7. Send notification to gonzalo@menatech.cloud

### 5. ExtractStyle

**Webhook receives:**

```json
{
  "email": "user@example.com",
  "file": "[Text or audio file]",
  "contentType": "blog posts",
  "automation": "extractstyle"
}
```

**Workflow should:**

1. Receive webhook trigger
2. Process text/audio samples
3. Analyze communication patterns
4. Extract style characteristics
5. Generate LLM instruction guide
6. Send style guide to user's email
7. Send notification to gonzalo@menatech.cloud

### 6. Blogger

**Webhook receives:**

```json
{
  "email": "user@example.com",
  "blogTopic": "Benefits of AI automation for small businesses",
  "targetAudience": "Small business owners",
  "desiredLength": "1500 words",
  "automation": "blogger"
}
```

**Workflow should:**

1. Receive webhook trigger
2. Research topic and trends
3. Perform SEO analysis
4. Generate blog content
5. Format and optimize
6. Send blog post to user's email
7. Send notification to gonzalo@menatech.cloud

## Setting Up Webhooks in Activepieces

### Step 1: Create a New Flow

1. Log in to Activepieces
2. Click **"Create Flow"** or open existing flow
3. Name it appropriately (e.g., "Data Validation Workflow")

### Step 2: Add Webhook Trigger

1. Click **"Add Trigger"**
2. Select **"Webhook"**
3. The webhook URL will be automatically generated
4. **Copy this URL** - you'll need it for the website configuration

### Step 3: Add Data Processing Steps

Example for **Prompt Generator**:

1. **Step 1: Webhook Trigger**
   - Receives: `email`, `platformName`, `useCase`, `outputFormat`

2. **Step 2: AI Action** (e.g., OpenAI, Claude)
   - Input: Use webhook data to create prompt
   - Prompt template:
     ```
     Create a comprehensive megaprompt for {{platformName}} that helps with: {{useCase}}
     The output should be in {{outputFormat}} format.
     Include best practices and optimization tips.
     ```

3. **Step 3: Format Response**
   - Use Code step or Text Formatter
   - Structure the AI response nicely

4. **Step 4: Send Email to User**
   - To: `{{trigger.email}}`
   - Subject: "Your Megaprompt for {{trigger.platformName}} is Ready!"
   - Body: Include the generated prompt and instructions
   - Attach any files if needed

5. **Step 5: Send Notification Email**
   - To: `gonzalo@menatech.cloud`
   - Subject: "New Prompt Generator Request"
   - Body: Include user email and request details

### Step 4: Test the Webhook

1. Click **"Test"** in Activepieces
2. Send sample data:
   ```json
   {
     "email": "test@example.com",
     "platformName": "ChatGPT",
     "useCase": "Test case",
     "outputFormat": "Markdown"
   }
   ```
3. Verify each step executes correctly
4. Check that emails are sent

### Step 5: Publish the Flow

1. Click **"Publish"**
2. The webhook is now live and ready to receive requests

## Email Template Examples

### User Email Template (Prompt Generator)

```
Subject: Your Megaprompt for {{platformName}} is Ready! 🎉

Hi there,

Thank you for using Menatech Apps! Your custom megaprompt has been generated.

PLATFORM: {{platformName}}
USE CASE: {{useCase}}
OUTPUT FORMAT: {{outputFormat}}

═══════════════════════════════════════

YOUR MEGAPROMPT:

{{generated_prompt}}

═══════════════════════════════════════

IMPLEMENTATION GUIDE:

{{implementation_instructions}}

═══════════════════════════════════════

Need help or have questions? Reply to this email or contact us at gonzalo@menatech.cloud

Best regards,
The Menatech Team

---
Want custom workflows for your business? Visit https://menatech.cloud
```

### Notification Email Template

```
Subject: New Prompt Generator Request 🔔

New automation request received:

AUTOMATION: Prompt Generator
USER EMAIL: {{trigger.email}}
TIMESTAMP: {{timestamp}}

REQUEST DETAILS:
- Platform: {{platformName}}
- Use Case: {{useCase}}
- Output Format: {{outputFormat}}

STATUS: Processed and sent to user

---
View all requests: [Link to your dashboard]
```

## Common Activepieces Actions

Here are useful actions for building your workflows:

### For File Processing (Data Validation, ExtractStyle)

- **Google Drive** - Store uploaded files
- **PDF.co** - Extract text from PDFs
- **OpenAI** - Analyze content with GPT-4
- **Anthropic Claude** - Alternative AI analysis

### For Research (BrandSEO, Blogger)

- **HTTP Request** - Call external APIs
- **Google Search** - Automated search queries
- **Scraper** - Extract data from websites
- **OpenAI** - Generate content and analysis

### For Email

- **Gmail** - Send via Gmail account
- **SendGrid** - Professional email service
- **Mailgun** - Transactional emails
- **SMTP** - Use any email provider

### For Data Processing

- **Code** - Custom JavaScript/Python logic
- **Data Mapper** - Transform data structure
- **Filter** - Conditional logic
- **Delay** - Wait between steps

## Webhook Security (Production)

For production deployment, add security:

### 1. Webhook Authentication

Add a secret token to verify requests:

**In Activepieces:**

```javascript
// Code step to verify token
if (trigger.headers["x-webhook-token"] !== "YOUR_SECRET_TOKEN") {
  throw new Error("Unauthorized");
}
```

**In website (js/app.js):**

```javascript
const response = await fetch(webhookUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Webhook-Token": "YOUR_SECRET_TOKEN",
  },
  body: JSON.stringify(data),
});
```

### 2. Rate Limiting

Add a filter step to check request frequency:

```javascript
// Store request count in database
// Reject if too many requests from same email
```

### 3. Input Validation

Always validate incoming data:

```javascript
// Code step
if (!trigger.email || !trigger.email.includes("@")) {
  throw new Error("Invalid email");
}

if (trigger.file && trigger.file.size > 10000000) {
  throw new Error("File too large");
}
```

## Testing Checklist

Before going live, test each workflow:

- [ ] Webhook receives data correctly
- [ ] All required fields are present
- [ ] File uploads work (if applicable)
- [ ] AI processing completes successfully
- [ ] User email is sent with correct content
- [ ] Notification email is sent to admin
- [ ] Error handling works (try invalid data)
- [ ] Response time is acceptable (< 30 seconds)

## Troubleshooting

### Webhook not receiving data

**Check:**

1. Webhook URL is correct in `js/app.js`
2. Flow is published (not in draft mode)
3. Network tab in browser shows successful POST request
4. CORS is not blocking the request

**Solution:**

- Test webhook with Postman first
- Check Activepieces logs for errors
- Verify webhook URL hasn't changed

### Emails not being sent

**Check:**

1. Email action is configured correctly
2. Email address variables are correct ({{trigger.email}})
3. Email service credentials are valid
4. Emails aren't in spam folder

**Solution:**

- Test email action separately
- Use a different email service
- Add SPF/DKIM records to your domain

### Workflow times out

**Check:**

1. AI actions taking too long
2. Too many sequential steps
3. External API delays

**Solution:**

- Add timeout limits to AI actions
- Use parallel branches for independent tasks
- Add "Delay" steps to prevent rate limiting

### File uploads failing

**Check:**

1. File size limits
2. File type restrictions
3. Storage quota

**Solution:**

- Validate file size on frontend
- Use cloud storage (Google Drive, S3)
- Compress files before processing

## Advanced Configuration

### Parallel Processing

For faster workflows, process tasks in parallel:

```
Webhook Trigger
    ├─→ AI Analysis (Branch 1)
    ├─→ Research (Branch 2)
    └─→ SEO Check (Branch 3)
         ↓
    Merge Results
         ↓
    Send Email
```

### Conditional Logic

Add different paths based on input:

```
Webhook Trigger
    ↓
Filter: Check file type
    ├─→ If PDF: Extract text → Analyze
    ├─→ If Audio: Transcribe → Analyze
    └─→ If Text: Analyze directly
```

### Error Notifications

Get notified when workflows fail:

```
Try:
    ↓
  Process normally
    ↓
Catch Error:
    ↓
  Send error email to admin
    ↓
  Send friendly message to user
```

## Cost Optimization

### Reduce API Calls

- Cache common results
- Batch similar requests
- Use cheaper AI models for simple tasks

### Optimize AI Prompts

- Be specific to reduce token usage
- Use system messages effectively
- Limit response length

### Monitor Usage

- Track workflow execution count
- Set up usage alerts
- Review expensive steps monthly

## Support

Need help configuring Activepieces?

1. **Activepieces Documentation**: [docs.activepieces.com](https://www.activepieces.com/docs)
2. **Activepieces Community**: [community.activepieces.com](https://community.activepieces.com)
3. **Menatech Support**: gonzalo@menatech.cloud

---

**Pro Tip**: Start with one automation, perfect it, then replicate the pattern for the others. This saves time and ensures consistency!
