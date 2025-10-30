# Menatech Apps - Automation Hub

![Menatech Logo](images/menatech-logo.png)

## Overview

Menatech Apps is a modern, responsive web application that serves as a central hub for 6 powerful AI-driven automation workflows. Built with clean HTML, CSS, and JavaScript, this website provides an intuitive interface for users to trigger automations and receive results via email.

## Features

### 🎨 Design & User Experience
- **Modern Gradient Design** - Orange-to-blue gradient matching Menatech brand
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Professional hover effects and transitions
- **Accessibility** - ARIA labels and keyboard navigation support

### 🌐 Internationalization
- **Bilingual Support** - Toggle between English and Spanish
- **Persistent Language** - User preference saved in browser

### 🎭 Theming
- **Light Mode** - Clean, bright interface
- **Dark Mode** - Easy on the eyes for low-light environments
- **Persistent Theme** - User preference saved in browser

### 🤖 Six Powerful Automations

1. **Data Validation** 📊
   - Upload PDF documents for fact-checking
   - Validates statements against verified data sources
   - Ensures document accuracy

2. **Prompt Generator** ✨
   - Creates optimized "megaprompts" for AI platforms
   - Tailored for specific no-code/low-code tools
   - Saves time and improves AI output quality

3. **BrandSEO** 🎯
   - Analyzes brand positioning in traditional and AI SEO
   - Provides actionable recommendations
   - Improves online visibility

4. **AI Focus Group** 👥
   - Validates product ideas with AI-generated personas
   - Simulates customer feedback
   - Reduces risk before development

5. **ExtractStyle** 🎨
   - Analyzes personal communication style
   - Creates custom LLM instructions
   - Makes AI content sound authentic

6. **Blogger** 📝
   - Generates well-researched blog content
   - Includes SEO and trend analysis
   - Maintains high-quality standards

### 📧 Communication
- **Email Results** - All automation results sent to user's email
- **Feedback System** - Users can submit feedback and requests
- **Notifications** - Admin receives alerts for all submissions

### 📊 Analytics
- **Google Analytics 4** - Track user behavior and engagement
- **Event Tracking** - Monitor automation usage, theme changes, language switches
- **Conversion Tracking** - Measure form submissions and automation triggers

### 🔗 Integration
- **Activepieces Webhooks** - Seamless connection to automation workflows
- **Social Sharing** - Share functionality for wider reach
- **LinkedIn Integration** - Direct link to company page

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)** - Modern vanilla JS, no frameworks
- **Google Analytics 4** - User tracking and insights
- **Activepieces** - Automation workflow platform
- **FormSubmit** - Email form handling (prototype)

## File Structure

```
menatech-apps/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles with theme support
├── js/
│   └── app.js             # Application logic and interactions
├── images/
│   └── menatech-logo.png  # Brand logo
├── README.md              # This file
└── DEPLOYMENT-GUIDE.md    # Comprehensive deployment instructions
```

## Quick Start

### 1. Local Testing

Simply open `index.html` in a web browser:

```bash
# Navigate to the project folder
cd menatech-apps

# Open in default browser (macOS)
open index.html

# Open in default browser (Linux)
xdg-open index.html

# Open in default browser (Windows)
start index.html
```

Or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server

# Then visit: http://localhost:8000
```

### 2. Configuration

Before deploying, configure:

1. **Google Analytics** - Replace `GA_MEASUREMENT_ID` in `index.html`
2. **Activepieces Webhooks** - Add webhook URLs in `js/app.js`
3. **Email Addresses** - Verify notification email in `js/app.js`

See **DEPLOYMENT-GUIDE.md** for detailed instructions.

### 3. Deployment

Deploy to any static hosting service:

- **Netlify** (Recommended) - Drag & drop deployment
- **GitHub Pages** - Free hosting with custom domain
- **Vercel** - Fast deployment with automatic HTTPS
- **Traditional Hosting** - Upload via FTP/SFTP

See **DEPLOYMENT-GUIDE.md** for step-by-step deployment instructions.

## Browser Support

- ✅ Chrome/Edge (Chromium) 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --gradient-start: #FF9933;    /* Orange */
    --gradient-end: #4DB8FF;      /* Blue */
    --accent-orange: #FF9933;
    --accent-blue: #00BFFF;
}
```

### Adding New Automations

1. Add automation card in `index.html`
2. Add webhook URL in `js/app.js`
3. Create form generator function in `js/app.js`
4. Add translations for new automation

### Changing Translations

Edit the `translations` object in `js/app.js`:

```javascript
const translations = {
    en: { /* English text */ },
    es: { /* Spanish text */ }
};
```

## Security Considerations

### Prototype Notice

This is a **prototype** version. The disclaimer warns users:
> "Please do not use sensitive data before contacting our team at gonzalo@menatech.cloud"

### For Production

Before handling sensitive data:

1. **Implement HTTPS** - Use SSL/TLS certificates
2. **Secure File Uploads** - Validate file types and sizes server-side
3. **API Authentication** - Add authentication to Activepieces webhooks
4. **Rate Limiting** - Prevent abuse of form submissions
5. **Data Encryption** - Encrypt sensitive data in transit and at rest
6. **Privacy Policy** - Add privacy policy and terms of service
7. **GDPR Compliance** - If serving EU users, ensure GDPR compliance

## Performance

- **Lightweight** - No heavy frameworks, minimal dependencies
- **Fast Loading** - Optimized CSS and JavaScript
- **Cached Assets** - Logo and styles cached by browser
- **Lazy Loading** - Modal content loaded on demand

## Accessibility

- **Semantic HTML** - Proper heading hierarchy and landmarks
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - All interactive elements accessible via keyboard
- **Color Contrast** - WCAG AA compliant color ratios
- **Focus Indicators** - Clear focus states for interactive elements

## Analytics Events Tracked

- `page_view` - Initial page load
- `theme_change` - Light/dark mode toggle
- `language_change` - English/Spanish toggle
- `automation_modal_open` - When user opens automation form
- `automation_triggered` - When user submits automation
- `feedback_submitted` - When user submits feedback
- `share_success` - When user shares the website

## Support & Contact

**Email:** gonzalo@menatech.cloud  
**Website:** [menatech.cloud](https://menatech.cloud)  
**LinkedIn:** [Menatech Cloud](https://www.linkedin.com/company/menatech-cloud/)

## License

© 2025 Menatech. All rights reserved.

---

## Changelog

### Version 1.0.0 (October 2025)
- Initial release
- 6 automation workflows
- Bilingual support (EN/ES)
- Light/dark theme
- Google Analytics integration
- Activepieces webhook integration
- Responsive design
- Feedback system

---

**Built with ❤️ by Menatech**

