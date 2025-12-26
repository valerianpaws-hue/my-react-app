# Welcome to Your Miaoda Project
Miaoda Application Link URL
    URL:https://medo.dev/projects/app-8gszr55zjz7l

# Bardo National Museum Website

A fully responsive, multilingual cultural heritage website for the Bardo National Museum of Prehistory and Ethnography in Algiers, Algeria.

## Features

### 🌍 Multilingual Support
- **Three Languages**: Arabic (primary), French, and English
- Automatic language detection based on browser settings
- Manual language toggle in header
- Complete UI and content translations
- RTL (Right-to-Left) support for Arabic

### 🎨 Theme Switching
- Light and Dark mode support
- Museum-themed color palette:
  - Warm beige (#E8DCC4)
  - Deep brown (#5C4033)
  - Cream white (#FAF7F2)
  - Terracotta accent (#C1876B)
- Theme preference saved in localStorage
- Smooth transitions between themes

### 📱 Fully Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Responsive images with lazy loading

### 🏛️ Museum Content Pages

#### Home Page
- Hero carousel with museum images
- Mission statement
- Quick navigation to collections
- Operating hours and contact information

#### About Us Page
- Complete museum history
- Cultural significance
- Major collections overview
- Architectural heritage information

#### Blog/Articles Page
- Static articles about:
  - Origins of Prehistoric Artifacts in Algeria
  - Traditional Algerian Ethnography
  - Heritage Preservation Methods

#### Prehistoric Collections Page
- Organized by historical periods:
  - Paleolithic Era (2.5 million - 10,000 BCE)
  - Neolithic Era (6,000 - 3,000 BCE)
  - Bronze Age (3,000 - 1,000 BCE)
- Featured artifacts with detailed descriptions
- Archaeological context and significance
- Rock art from Tassili n'Ajjer

#### Ethnographic Exhibits Page
- Traditional clothing and textiles
- Tools and agricultural implements
- Ritual objects and musical instruments
- Regional traditions (Kabylia, Sahara, Algiers, M'zab Valley)
- Traditional crafts and techniques

#### Special Exhibitions Page
- Current exhibitions
- Upcoming exhibitions
- Past exhibitions archive
- Exhibition details with curator information

#### Contact Page
- Contact form with Supabase backend
- Museum location and map
- Operating hours
- Admission information
- Facilities and visitor information

### 🤖 AI-Powered Museum Guide
- Interactive chat widget on all pages
- Powered by Gemini 2.5 Flash API
- Streaming responses for real-time interaction
- Comprehensive knowledge base including:
  - Museum history and background
  - Collection information
  - Artifact details
  - Visitor guidance
- Markdown rendering for formatted responses
- Multilingual support

### 💾 Backend Integration
- **Supabase** for contact form submissions
- Secure data storage
- Row Level Security (RLS) policies
- Public form submission capability

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Backend**: Supabase
- **AI Integration**: Gemini 2.5 Flash API
- **Markdown Rendering**: streamdown
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── MuseumGuide.tsx       # AI chat widget
│   ├── layouts/
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx            # Site footer
│   │   └── Layout.tsx            # Main layout wrapper
│   └── ui/                       # shadcn/ui components
├── contexts/
│   ├── LanguageContext.tsx       # i18n context
│   └── ThemeContext.tsx          # Theme management
├── db/
│   ├── supabase.ts              # Supabase client
│   └── api.ts                   # API functions
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── BlogPage.tsx
│   ├── PrehistoricPage.tsx
│   ├── EthnographicPage.tsx
│   ├── ExhibitionsPage.tsx
│   └── ContactPage.tsx
├── types/
│   └── types.ts                 # TypeScript interfaces
├── App.tsx                      # Main app component
└── routes.tsx                   # Route configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env` file with:
```
VITE_APP_ID=app-8gszr55kjz7l
VITE_SUPABASE_URL=https://aeyhidpzcedhhejgunzh.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

4. Run development server:
```bash
pnpm run dev
```

5. Build for production:
```bash
pnpm run build:prod
```

## Deployment

### Netlify Deployment

This project is configured for seamless deployment on Netlify.

#### Quick Deploy
1. **Commit and push changes:**
```bash
git add .
git commit -m "Deploy to Netlify"
git push origin main
```

2. **Netlify will automatically build and deploy** using the configuration in `netlify.toml`

#### Manual Deploy
```bash
# Build locally
pnpm run build:prod

# Deploy via Netlify CLI
netlify deploy --prod --dir=dist
```

#### Configuration Files
- **`netlify.toml`** - Netlify build configuration
- **`vite.config.prod.ts`** - Production Vite configuration
- **`.nvmrc`** - Node.js version lock (v20)
- **`.npmrc`** - NPM configuration

#### Environment Variables
Set these in Netlify Dashboard (Site Settings → Environment Variables):
- `VITE_APP_ID`
- `VITE_API_ENV`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

#### Deployment Documentation
For detailed deployment instructions and troubleshooting:
- 📖 [Netlify Deployment Guide](./NETLIFY_DEPLOYMENT_GUIDE.md)
- ✅ [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)

### Build Configuration
- **Node Version:** 20 (LTS)
- **Package Manager:** pnpm
- **Build Command:** `pnpm install && pnpm run build:prod`
- **Publish Directory:** `dist`
- **Build Time:** ~2-5 minutes

## Features Implementation Details

### Multilingual System
The website uses a custom context-based i18n system with complete translations for:
- Navigation menus
- Page content
- UI elements
- Form labels and messages
- AI assistant responses

### AI Museum Guide
- Uses EventSource for streaming responses
- Implements comprehensive museum knowledge base
- Handles conversation history
- Supports markdown formatting in responses
- Graceful error handling

### Contact Form
- Form validation
- Supabase backend integration
- Success/error toast notifications
- Secure data storage with RLS policies

### Image Optimization
- All images sourced from professional museum photography
- Lazy loading for performance
- Responsive image sizing
- Proper alt text for accessibility

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios for text
- Focus indicators on interactive elements

## Performance Optimizations

- Code splitting with React Router
- Lazy loading of images
- Optimized bundle size
- Efficient re-rendering with React hooks
- CSS optimization with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2025 Bardo National Museum

## Contact

For questions or support, please contact:
- Email: contact@musee-bardo.dz
- Phone: +213 21 74 11 49
- Address: 3 Rue Franklin Roosevelt, Algiers, Algeria
