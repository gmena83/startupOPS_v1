# StartupOPS - Give Founders Their Time Back

A modern, responsive landing page showcasing plug-and-play automation solutions for startup founders. Built with React, TypeScript, and Tailwind CSS.

**Created by**: [Menatech](https://menatech.cloud)  
**LinkedIn**: [Menatech Cloud](https://www.linkedin.com/company/menatech-cloud)  
**Lovable Project**: https://lovable.dev/projects/edb6d14e-921b-43eb-be35-607a4a6991d5

---

## 🎯 Project Overview

StartupOPS empowers startup founders by providing ready-to-use automation solutions that save time on repetitive administrative tasks. Our mission is to help founders reclaim 9.5+ hours per week by offering no-code, plug-and-play automations that require no APIs or complex integrations.

**Target Audience**: Startup founders, entrepreneurs, solopreneurs, and small business owners looking to streamline operations without technical overhead.

**Key Value Proposition**:
- ⚡ Save 9.5+ hours per week on admin tasks
- 🔌 No API keys or integrations required
- 🚀 Instant results delivered via email
- 💰 Pay only for what you use (0.25€ per credit)

---

## ✨ Features

### 6 Ready-to-Use Automations

1. **Data Validation** 📋  
   Upload PDF documents for automated factual verification and accuracy analysis.

2. **Prompt Generator** 🤖  
   Generate optimized megaprompts for no-code platforms (ChatGPT, Claude, Gemini).

3. **BrandSEO** 🔍  
   Analyze your brand positioning in both traditional search engines and AI-powered search (ChatGPT, Perplexity).

4. **AI Focus Group** 👥  
   Validate product ideas with AI-generated personas simulating real customer feedback.

5. **ExtractStyle** 🎨  
   Analyze communication style from text or audio to maintain consistent brand voice.

6. **Topic Research** ✍️  
   Generate SEO-optimized blog content with comprehensive topic research.

### Platform Features

- ✅ **Bilingual Support** - Full English and Spanish language toggle
- ✅ **Light/Dark Mode** - Seamless theme switching with next-themes
- ✅ **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Embedded Typeform Integration** - Smooth automation trigger experience
- ✅ **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- ✅ **Smooth Navigation** - Anchor links with mobile hamburger menu
- ✅ **Accessible Design** - WCAG-compliant with keyboard navigation support

---

## 🎨 Design & User Experience

### Design System

**Color Palette**: Slate/Amber with gradient accents
- Primary: Slate tones for professional, modern feel
- Accent: Amber/warm tones for calls-to-action
- Gradients: Smooth transitions for premium feel

**Typography**: Inter font family with responsive scaling
- Headings: `text-4xl` → `text-6xl` (mobile → desktop)
- Body: `text-base` → `text-lg`
- Optimized line heights for readability

**Component System**:
- Shadows: Soft (`shadow-soft`), medium (`shadow-medium`), large (`shadow-large`)
- Animations: Fade-in, scale, and stagger effects using Tailwind
- Spacing: Consistent 8px grid system
- Border Radius: Rounded (`rounded-md`, `rounded-lg`, `rounded-xl`)

### Responsive Breakpoints

| Device | Breakpoint | Target Devices |
|--------|------------|----------------|
| Mobile S | 320px | iPhone SE |
| Mobile M | 375px | iPhone 12/13/14 |
| Mobile L | 425px | iPhone Plus |
| Tablet | 768px (md) | iPad, Android tablets |
| Laptop | 1024px (lg) | Small laptops |
| Desktop | 1440px+ (xl) | Desktop monitors |

### Key UX Features

- **Smooth Anchor Navigation**: Hash-based routing to Features, How It Works, Automations sections
- **Mobile Hamburger Menu**: Sheet drawer with all navigation links, theme toggle, and language switcher
- **Dialog-Based Automation Selection**: Click any automation to open embedded Typeform in modal
- **Touch-Friendly**: All interactive elements meet 44px minimum touch target size
- **Keyboard Accessible**: Full keyboard navigation with visible focus states
- **Loading States**: Smooth transitions and skeleton loaders
- **Error Handling**: Graceful fallbacks for iframe loading issues

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                      # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── sheet.tsx
│   │   ├── card.tsx
│   │   └── ... (30+ components)
│   ├── Header.tsx               # Navigation with mobile menu
│   ├── Hero.tsx                 # Hero section with stats
│   ├── Features.tsx             # Feature cards grid (3 items)
│   ├── HowItWorks.tsx           # 3-step process explanation
│   ├── Automations.tsx          # 6 automation showcase cards
│   ├── CompetitiveEdge.tsx      # Comparison with alternatives
│   ├── ProblemImpact.tsx        # Stats on admin overhead costs
│   ├── Pricing.tsx              # 4-tier pricing plans
│   ├── CTA.tsx                  # Call-to-action section
│   ├── Footer.tsx               # Footer with Menatech branding
│   ├── TypeformDialog.tsx       # Embedded Typeform modal
│   ├── ThemeToggle.tsx          # Light/dark mode switcher
│   ├── ThemeProvider.tsx        # Theme context provider
│   └── LanguageToggle.tsx       # EN/ES language switcher
├── contexts/
│   └── LanguageContext.tsx      # i18n state management
├── assets/
│   ├── hero-time-freedom.jpg    # Hero background image
│   └── hero-workspace.jpg       # Alternative hero image
├── pages/
│   ├── Index.tsx                # Main landing page (home)
│   └── NotFound.tsx             # 404 error page
├── hooks/
│   ├── use-mobile.tsx           # Mobile breakpoint detection
│   └── use-toast.ts             # Toast notification hook
├── lib/
│   └── utils.ts                 # Utility functions (cn, etc.)
├── index.css                    # Global styles + design tokens
├── main.tsx                     # App entry point with providers
└── App.tsx                      # Root component with routing
```

---

## 🛠️ Technologies Used

### Core Framework
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible, customizable component library
- **Radix UI** - Headless UI primitives for accessibility
- **Lucide React 0.462.0** - Beautiful icon library
- **Class Variance Authority** - Type-safe component variants
- **Tailwind Merge** - Smart class merging utility

### State Management & Forms
- **React Hook Form 7.61.1** - Performant form validation
- **Zod 3.25.76** - TypeScript-first schema validation
- **@tanstack/react-query 5.83.0** - Server state management

### Theme & Utilities
- **next-themes 0.3.0** - Dark/light mode management
- **date-fns 3.6.0** - Modern date utility library
- **Sonner** - Beautiful toast notifications

### Third-Party Integrations
- **Typeform** - Embedded forms for automation triggers
- Each automation delivers results via email

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**
```sh
npm install
```

3. **Start development server**
```sh
npm run dev
```

The app will open at `http://localhost:5173`

### Building for Production

```sh
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🤖 Available Automations

Each automation is accessible via the Automations section. Click "Try [Automation Name]" to open the embedded Typeform and submit your request.

| Automation | Purpose | Input | Output |
|------------|---------|-------|--------|
| **Data Validation** | Verify facts in documents | PDF upload | Accuracy report via email |
| **Prompt Generator** | Create optimized prompts | Description + platform | Megaprompt via email |
| **BrandSEO** | Analyze brand positioning | Brand name + URL | SEO analysis via email |
| **AI Focus Group** | Product validation | Product idea | Focus group insights via email |
| **ExtractStyle** | Communication analysis | Text/audio sample | Style guide via email |
| **Topic Research** | Blog content generation | Topic + keywords | SEO-optimized content via email |

**Pricing**: 0.25€ per credit. Each automation costs a different number of credits based on complexity.

---

## 🌐 Deployment

### Deploy with Lovable (One-Click)

1. Open your [Lovable project](https://lovable.dev/projects/edb6d14e-921b-43eb-be35-607a4a6991d5)
2. Click **Share** → **Publish**
3. Your app is live at `yoursite.lovable.app`

### Deploy to Other Platforms

This project is a standard Vite + React app and can be deployed to:

- **Vercel**: Connect GitHub repo → Auto-deploy
- **Netlify**: Drag & drop `dist/` folder or connect Git
- **GitHub Pages**: Use GitHub Actions workflow
- **Cloudflare Pages**: Connect repo with build command `npm run build`

**Build Settings**:
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

---

## 🔧 Development

### Project Scripts

```sh
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Environment Variables

Currently, this project does not require environment variables. All Typeform URLs are hardcoded in `src/components/Automations.tsx`.

If you need to add environment variables:

1. Create `.env` file in root:
```
VITE_API_URL=your_value_here
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Customization Guide

**Update Typeform URLs**:
Edit `src/components/Automations.tsx` → `automations` array → `typeformUrl` property

**Change Color Scheme**:
Edit `src/index.css` → `:root` and `.dark` CSS variables

**Add New Section**:
1. Create component in `src/components/YourSection.tsx`
2. Import and add to `src/pages/Index.tsx`
3. Add navigation link in `src/components/Header.tsx`

**Modify Translations**:
Edit `src/contexts/LanguageContext.tsx` → `translations` object

---

## 📱 Responsive Design Testing

The site has been optimized and tested on:

- ✅ iPhone SE (320px)
- ✅ iPhone 12/13/14 (375px - 390px)
- ✅ iPhone Plus (414px - 428px)
- ✅ iPad (768px - 1024px)
- ✅ Desktop (1440px+)
- ✅ 4K displays (2560px+)

**Test in Lovable**: Use the responsive preview toggle in the editor

**Test Locally**: Open browser DevTools → Toggle device toolbar

---

## 🤝 Contributing

This is a proprietary project by Menatech. For collaboration inquiries, contact us via [LinkedIn](https://www.linkedin.com/company/menatech-cloud).

---

## 📄 License

© 2025 Menatech. All rights reserved.

---

## 🔗 Links

- **Menatech Website**: [https://menatech.cloud](https://menatech.cloud)
- **LinkedIn**: [Menatech Cloud](https://www.linkedin.com/company/menatech-cloud)
- **Lovable Project**: [View in Lovable](https://lovable.dev/projects/edb6d14e-921b-43eb-be35-607a4a6991d5)
- **Documentation**: [Lovable Docs](https://docs.lovable.dev/)

---

## 📞 Support

For questions, feature requests, or technical support:
- Connect via [LinkedIn](https://www.linkedin.com/company/menatech-cloud)
- Visit [Menatech](https://menatech.cloud)

---

**Built with ❤️ by Menatech using Lovable**
