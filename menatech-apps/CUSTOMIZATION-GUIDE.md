# Customization Guide - Menatech Apps

This guide will help you customize and extend your Menatech Apps website without needing deep coding knowledge.

## Table of Contents
1. [Changing Colors and Branding](#changing-colors-and-branding)
2. [Adding New Automations](#adding-new-automations)
3. [Modifying Existing Automations](#modifying-existing-automations)
4. [Changing Text and Translations](#changing-text-and-translations)
5. [Adjusting Layout and Spacing](#adjusting-layout-and-spacing)
6. [Adding New Features](#adding-new-features)

---

## Changing Colors and Branding

### Update Brand Colors

**File to edit:** `css/styles.css`

**Find this section** (around line 7):

```css
:root {
    /* Brand Colors */
    --gradient-start: #FF9933;
    --gradient-mid: #FFA500;
    --gradient-end: #4DB8FF;
    --accent-blue: #00BFFF;
    --accent-orange: #FF9933;
}
```

**What each color controls:**

| Variable | Where it appears |
|----------|------------------|
| `--gradient-start` | Hero section, buttons (start of gradient) |
| `--gradient-mid` | Hero section, buttons (middle of gradient) |
| `--gradient-end` | Hero section, buttons (end of gradient) |
| `--accent-blue` | Card highlights, links |
| `--accent-orange` | Hover effects, active states |

**Example - Change to purple/pink theme:**

```css
:root {
    --gradient-start: #9333EA;    /* Purple */
    --gradient-mid: #C026D3;      /* Fuchsia */
    --gradient-end: #EC4899;      /* Pink */
    --accent-blue: #EC4899;       /* Pink */
    --accent-orange: #9333EA;     /* Purple */
}
```

### Replace Logo

**Steps:**

1. Prepare your new logo image (PNG recommended, transparent background)
2. Name it `menatech-logo.png`
3. Replace the file in the `images/` folder
4. Recommended size: 200-300px width, maintains aspect ratio

**If your logo has different dimensions:**

Edit `css/styles.css` (around line 68):

```css
.logo-img {
    height: 50px;  /* Change this value */
    width: auto;
}
```

### Change Fonts

**File to edit:** `index.html` and `css/styles.css`

**Current font:** Inter (from Google Fonts)

**To use a different Google Font:**

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your font (e.g., "Poppins")
3. Copy the `<link>` code

**In `index.html`** (around line 9), replace:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**In `css/styles.css`** (around line 27), update:

```css
--font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

---

## Adding New Automations

Let's add a 7th automation as an example: **"Email Writer"**

### Step 1: Add HTML Card

**File to edit:** `index.html`

**Find the automation grid** (around line 235) and add before the closing `</div>`:

```html
<!-- Automation 7: Email Writer -->
<div class="automation-card" data-automation="email-writer">
    <div class="card-icon">📧</div>
    <h3 class="card-title" data-en="Email Writer" data-es="Escritor de Emails">Email Writer</h3>
    <p class="card-description" data-en="Generate professional emails for any situation with AI assistance" data-es="Genera emails profesionales para cualquier situación con asistencia de IA">
        Generate professional emails for any situation with AI assistance
    </p>
    <div class="card-value" data-en="Save time writing emails while maintaining professionalism" data-es="Ahorra tiempo escribiendo emails mientras mantienes profesionalismo">
        <strong data-en="Value:" data-es="Valor:">Value:</strong> Save time writing emails while maintaining professionalism
    </div>
    <div class="card-requirements">
        <strong data-en="Required Data:" data-es="Datos Requeridos:">Required Data:</strong>
        <ul>
            <li data-en="Email purpose" data-es="Propósito del email">Email purpose</li>
            <li data-en="Recipient context" data-es="Contexto del destinatario">Recipient context</li>
            <li data-en="Tone preference" data-es="Preferencia de tono">Tone preference</li>
            <li data-en="Email address for results" data-es="Correo electrónico para resultados">Email address for results</li>
        </ul>
    </div>
    <button class="trigger-btn" data-automation-type="form" onclick="openAutomation('email-writer')">
        <span data-en="Open Form" data-es="Abrir Formulario">Open Form</span>
    </button>
</div>
```

### Step 2: Add Webhook Configuration

**File to edit:** `js/app.js`

**Find the AUTOMATION_WEBHOOKS section** (around line 12) and add:

```javascript
const AUTOMATION_WEBHOOKS = {
    'data-validation': 'YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE',
    'prompt-generator': 'YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE',
    'brandseo': 'YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE',
    'ai-focus-group': 'YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE',
    'extractstyle': 'YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE',
    'blogger': 'YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE',
    'email-writer': 'YOUR_ACTIVEPIECES_WEBHOOK_URL_HERE'  // NEW
};
```

### Step 3: Add Translations

**File to edit:** `js/app.js`

**Find the translations object** (around line 23) and add to both `en` and `es`:

```javascript
const translations = {
    en: {
        modalTitle: {
            // ... existing ...
            'email-writer': 'Email Writer'  // NEW
        },
        formLabels: {
            // ... existing ...
            emailPurpose: 'Email Purpose',  // NEW
            recipientContext: 'Recipient Context',  // NEW
            tonePreference: 'Tone Preference'  // NEW
        }
    },
    es: {
        modalTitle: {
            // ... existing ...
            'email-writer': 'Escritor de Emails'  // NEW
        },
        formLabels: {
            // ... existing ...
            emailPurpose: 'Propósito del Email',  // NEW
            recipientContext: 'Contexto del Destinatario',  // NEW
            tonePreference: 'Preferencia de Tono'  // NEW
        }
    }
};
```

### Step 4: Create Form Generator Function

**File to edit:** `js/app.js`

**Find the form generators section** (around line 200) and add:

```javascript
function generateEmailWriterForm(automationType) {
    const t = translations[currentLang];
    
    return `
        <form id="automationForm" class="feedback-form">
            <div class="form-group">
                <label for="userEmail">${t.formLabels.email}</label>
                <input type="email" id="userEmail" name="email" required>
            </div>
            <div class="form-group">
                <label for="emailPurpose">${t.formLabels.emailPurpose}</label>
                <input type="text" id="emailPurpose" name="emailPurpose" placeholder="e.g., Follow up on meeting, Request information" required>
            </div>
            <div class="form-group">
                <label for="recipientContext">${t.formLabels.recipientContext}</label>
                <textarea id="recipientContext" name="recipientContext" rows="3" placeholder="Who is the recipient? What's your relationship?" required></textarea>
            </div>
            <div class="form-group">
                <label for="tonePreference">${t.formLabels.tonePreference}</label>
                <select id="tonePreference" name="tonePreference" required>
                    <option value="professional">Professional</option>
                    <option value="friendly">Friendly</option>
                    <option value="formal">Formal</option>
                    <option value="casual">Casual</option>
                </select>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button type="submit" class="submit-btn">${t.buttons.submit}</button>
                <button type="button" class="submit-btn" onclick="closeModal()" style="background: var(--bg-secondary); color: var(--text-primary);">${t.buttons.cancel}</button>
            </div>
        </form>
    `;
}
```

### Step 5: Add Case to openAutomation Function

**File to edit:** `js/app.js`

**Find the openAutomation function** (around line 140) and add to the switch statement:

```javascript
switch(automationType) {
    case 'data-validation':
        formHTML += generateFileUploadForm(automationType, ['pdf']);
        break;
    // ... other cases ...
    case 'email-writer':  // NEW
        formHTML += generateEmailWriterForm(automationType);
        break;
}
```

**Done!** Your new automation is now fully integrated.

---

## Modifying Existing Automations

### Change Automation Icon

**File to edit:** `index.html`

Find the automation card and change the emoji in:

```html
<div class="card-icon">📊</div>  <!-- Change this emoji -->
```

**Emoji resources:**
- [Emojipedia](https://emojipedia.org/)
- [Get Emoji](https://getemoji.com/)

### Change Required Fields

**File to edit:** `index.html`

Find the automation's `<ul>` list and modify:

```html
<ul>
    <li data-en="New field name" data-es="Nuevo nombre de campo">New field name</li>
    <!-- Add or remove <li> items as needed -->
</ul>
```

### Change Form Fields

**File to edit:** `js/app.js`

Find the form generator function (e.g., `generateBloggerForm`) and modify the HTML:

**Add a new field:**
```javascript
<div class="form-group">
    <label for="newField">${t.formLabels.newField}</label>
    <input type="text" id="newField" name="newField" required>
</div>
```

**Change field type:**
```javascript
<!-- Text input -->
<input type="text" id="fieldName" name="fieldName" required>

<!-- Email input -->
<input type="email" id="fieldName" name="fieldName" required>

<!-- Number input -->
<input type="number" id="fieldName" name="fieldName" min="0" max="100" required>

<!-- Dropdown -->
<select id="fieldName" name="fieldName" required>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
</select>

<!-- Textarea -->
<textarea id="fieldName" name="fieldName" rows="4" required></textarea>

<!-- File upload -->
<input type="file" id="fieldName" name="fieldName" accept=".pdf,.doc" required>

<!-- Checkbox -->
<input type="checkbox" id="fieldName" name="fieldName">

<!-- Radio buttons -->
<input type="radio" id="option1" name="fieldName" value="option1">
<input type="radio" id="option2" name="fieldName" value="option2">
```

---

## Changing Text and Translations

### Update English Text

**File to edit:** `index.html`

Find the element and change the `data-en` attribute:

```html
<h1 class="hero-title" data-en="New English Text" data-es="Nuevo Texto Español">
    New English Text
</h1>
```

**Important:** Always update BOTH:
1. The `data-en` attribute
2. The text between the tags (this is what shows by default)

### Update Spanish Text

**File to edit:** `index.html`

Change the `data-es` attribute:

```html
<p data-en="English version" data-es="Versión en español">
    English version
</p>
```

### Add New Translatable Text

**In HTML:**

```html
<div data-en="English text" data-es="Texto español">
    English text
</div>
```

**In JavaScript (for dynamic content):**

**File to edit:** `js/app.js`

Add to the translations object:

```javascript
const translations = {
    en: {
        newSection: {
            title: 'English Title',
            description: 'English description'
        }
    },
    es: {
        newSection: {
            title: 'Título Español',
            description: 'Descripción española'
        }
    }
};
```

Use in code:

```javascript
const title = translations[currentLang].newSection.title;
```

---

## Adjusting Layout and Spacing

### Change Automation Grid Columns

**File to edit:** `css/styles.css`

**Find** (around line 162):

```css
.automation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-lg);
}
```

**Options:**

```css
/* Always 2 columns */
grid-template-columns: repeat(2, 1fr);

/* Always 3 columns */
grid-template-columns: repeat(3, 1fr);

/* Auto-fit with larger cards */
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

/* Auto-fit with smaller cards */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

### Adjust Spacing

**File to edit:** `css/styles.css`

**Find the spacing variables** (around line 18):

```css
:root {
    --spacing-xs: 0.5rem;   /* 8px */
    --spacing-sm: 1rem;     /* 16px */
    --spacing-md: 1.5rem;   /* 24px */
    --spacing-lg: 2rem;     /* 32px */
    --spacing-xl: 3rem;     /* 48px */
}
```

**Change values to adjust spacing throughout the site:**

```css
/* More compact */
--spacing-lg: 1.5rem;
--spacing-xl: 2.5rem;

/* More spacious */
--spacing-lg: 2.5rem;
--spacing-xl: 4rem;
```

### Change Container Width

**File to edit:** `css/styles.css`

**Find** (around line 16):

```css
:root {
    --container-width: 1200px;
}
```

**Options:**

```css
--container-width: 1000px;  /* Narrower */
--container-width: 1400px;  /* Wider */
--container-width: 100%;    /* Full width */
```

---

## Adding New Features

### Add a Newsletter Signup

**File to edit:** `index.html`

**Add before the footer** (around line 280):

```html
<!-- Newsletter Section -->
<section class="newsletter" style="padding: 3rem 0; background: var(--bg-secondary);">
    <div class="container">
        <h2 class="section-title" data-en="Stay Updated" data-es="Mantente Actualizado">Stay Updated</h2>
        <p style="text-align: center; margin-bottom: 2rem;" data-en="Get notified about new automations and features" data-es="Recibe notificaciones sobre nuevas automatizaciones y características">
            Get notified about new automations and features
        </p>
        <form id="newsletterForm" style="max-width: 500px; margin: 0 auto; display: flex; gap: 1rem;">
            <input type="email" placeholder="Your email" required style="flex: 1; padding: 1rem; border: 2px solid var(--border-color); border-radius: 8px; font-size: 1rem;">
            <button type="submit" class="submit-btn" style="padding: 1rem 2rem;">Subscribe</button>
        </form>
    </div>
</section>
```

**Add JavaScript handler in `js/app.js`:**

```javascript
// In attachEventListeners function
document.getElementById('newsletterForm').addEventListener('submit', handleNewsletterSubmit);

// Add new function
async function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Send to your email service or Activepieces webhook
    console.log('Newsletter signup:', email);
    
    showMessage('success', 'Thank you for subscribing!');
    event.target.reset();
}
```

### Add FAQ Section

**File to edit:** `index.html`

**Add before the feedback section:**

```html
<!-- FAQ Section -->
<section class="faq" style="padding: 3rem 0; background: var(--bg-primary);">
    <div class="container">
        <h2 class="section-title" data-en="Frequently Asked Questions" data-es="Preguntas Frecuentes">Frequently Asked Questions</h2>
        
        <div style="max-width: 800px; margin: 0 auto;">
            <details style="margin-bottom: 1rem; padding: 1.5rem; background: var(--bg-card); border-radius: 8px; border: 2px solid var(--border-color);">
                <summary style="font-weight: 600; cursor: pointer; font-size: 1.1rem;">How long does it take to get results?</summary>
                <p style="margin-top: 1rem; color: var(--text-secondary);">Most automations complete within 5-10 minutes. You'll receive results via email.</p>
            </details>
            
            <details style="margin-bottom: 1rem; padding: 1.5rem; background: var(--bg-card); border-radius: 8px; border: 2px solid var(--border-color);">
                <summary style="font-weight: 600; cursor: pointer; font-size: 1.1rem;">Is my data secure?</summary>
                <p style="margin-top: 1rem; color: var(--text-secondary);">Yes! We use industry-standard encryption and never share your data with third parties.</p>
            </details>
            
            <!-- Add more FAQ items as needed -->
        </div>
    </div>
</section>
```

### Add Testimonials

**File to edit:** `index.html`

**Add after the hero section:**

```html
<!-- Testimonials Section -->
<section class="testimonials" style="padding: 3rem 0; background: var(--bg-secondary);">
    <div class="container">
        <h2 class="section-title" data-en="What Our Users Say" data-es="Lo Que Dicen Nuestros Usuarios">What Our Users Say</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem;">
            <div style="background: var(--bg-card); padding: 2rem; border-radius: 12px; border: 2px solid var(--border-color);">
                <p style="font-style: italic; margin-bottom: 1rem; color: var(--text-secondary);">"Menatech Apps saved me hours of work! The Data Validation tool is a game-changer."</p>
                <p style="font-weight: 600;">- Sarah Johnson, Marketing Director</p>
            </div>
            
            <div style="background: var(--bg-card); padding: 2rem; border-radius: 12px; border: 2px solid var(--border-color);">
                <p style="font-style: italic; margin-bottom: 1rem; color: var(--text-secondary);">"The Prompt Generator helped me get better results from AI tools immediately."</p>
                <p style="font-weight: 600;">- Michael Chen, Product Manager</p>
            </div>
            
            <div style="background: var(--bg-card); padding: 2rem; border-radius: 12px; border: 2px solid var(--border-color);">
                <p style="font-style: italic; margin-bottom: 1rem; color: var(--text-secondary);">"BrandSEO gave us insights we never would have found on our own."</p>
                <p style="font-weight: 600;">- Emily Rodriguez, CEO</p>
            </div>
        </div>
    </div>
</section>
```

### Add Social Media Links

**File to edit:** `index.html`

**In the footer** (around line 290), add:

```html
<div class="footer-content">
    <p>&copy; 2025 Menatech. <span data-en="All rights reserved." data-es="Todos los derechos reservados.">All rights reserved.</span></p>
    
    <!-- NEW: Social Media Links -->
    <div style="display: flex; gap: 1rem; align-items: center;">
        <a href="https://twitter.com/menatech" target="_blank" style="color: var(--text-secondary); transition: color 0.3s;">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
        </a>
        <a href="https://facebook.com/menatech" target="_blank" style="color: var(--text-secondary); transition: color 0.3s;">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://instagram.com/menatech" target="_blank" style="color: var(--text-secondary); transition: color 0.3s;">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
    </div>
    
    <div class="footer-links">
        <a href="https://menatech.cloud" target="_blank">menatech.cloud</a>
        <a href="https://www.linkedin.com/company/menatech-cloud/" target="_blank">LinkedIn</a>
    </div>
</div>
```

---

## Tips for Customization

### 1. Always Test After Changes
- Save your files
- Refresh the browser (Ctrl+F5 or Cmd+Shift+R to clear cache)
- Test in both light and dark mode
- Test in both English and Spanish
- Test on mobile view

### 2. Keep Backups
Before making major changes:
```bash
# Create a backup
cp -r menatech-apps menatech-apps-backup
```

### 3. Use Browser Developer Tools
- Press F12 to open developer tools
- Use "Inspect Element" to see which CSS rules apply
- Edit CSS live to test changes before saving
- Check Console tab for JavaScript errors

### 4. Validate Your Changes
- **HTML**: Use [W3C Validator](https://validator.w3.org/)
- **CSS**: Use [CSS Validator](https://jigsaw.w3.org/css-validator/)
- **JavaScript**: Check browser console for errors

### 5. Mobile-First Approach
Always check how changes look on mobile:
- In Chrome: F12 → Click device icon → Select mobile device
- Test actual mobile devices when possible

---

## Common Customization Requests

### Make Cards Larger

**File:** `css/styles.css`

```css
.automation-card {
    padding: 2.5rem;  /* Increase from 2rem */
}

.card-title {
    font-size: 2rem;  /* Increase from 1.75rem */
}
```

### Change Button Style

**File:** `css/styles.css`

```css
.trigger-btn {
    border-radius: 50px;  /* Make fully rounded */
    text-transform: uppercase;  /* ALL CAPS */
    letter-spacing: 1px;  /* Spacing between letters */
}
```

### Add Animation to Cards

**File:** `css/styles.css`

```css
.automation-card {
    animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Change Hero Background

**File:** `css/styles.css`

```css
.hero {
    /* Solid color instead of gradient */
    background: #FF9933;
    
    /* Or use an image */
    background-image: url('images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

---

## Need Help?

If you get stuck:

1. **Check the browser console** (F12) for error messages
2. **Undo your last change** and try again
3. **Restore from backup** if things break
4. **Contact support**: gonzalo@menatech.cloud

Remember: Customization is iterative. Make small changes, test, then move to the next change!

