# Bardo National Museum Static Website Requirements Document

## 1. Project Overview
\n### 1.1 Website Name
Bardo National Museum of Prehistory and Ethnography (Musée National du Bardo) Official Website

### 1.2 Website Description\nA fully responsive, multilingual cultural heritage static website for the Bardo National Museum located in Algiers, Algeria. The website serves as a digital gateway to showcase the museum's prehistoric and ethnographic collections, provide visitor information, and offer an interactive AI-powered guide for enhanced user experience. Built entirely with pure HTML, CSS, and Vanilla JavaScript without any frameworks.

### 1.3 Target Audience
- Museum visitors and tourists
- Cultural heritage researchers and students
- History and archaeology enthusiasts
- Local and international community interested in Algerian heritage

## 2. Core Features

### 2.1 Multilingual Support
- Support three languages: Arabic (primary), French, and English
- Automatic content language switching based on browser settings
- Manual language toggle in navbar or footer
- All pages and UI elements fully translated
- Language preference saved in localStorage

### 2.2 Theme Switching
- Dark mode and Light mode toggle
- Theme preference saved in local storage\n- Smooth transition between themes\n
### 2.3 Page Structure and Content
\n#### 2.3.1 Home Page (index.html)
- Hero section with large carousel featuring:
  - Exterior building photos from Google Maps\n  - Gallery room photos from Google Maps
  - Key artifact images from Google Maps
- Museum mission statement and visitor preview
- Quick navigation links to: Prehistory Collections, Ethnographic Exhibits, Special Exhibitions
- Operating hours, address, and contact information
\n#### 2.3.2 About Us Page (about.html)
- Complete museum history including:\n  - Founding date and establishment story
  - Cultural significance and purpose
  - Major collections overview and highlights
- Content sourced from Wikipedia and official museum documents

#### 2.3.3 Blog/Articles Page (blog.html)
- Static article list (no CMS editing)
- Sample articles:
  - 'Origins of Prehistoric Artifacts in Algeria'
  - 'Traditional Algerian Ethnography Explained'\n  - 'How the Museum Preserves Heritage'

#### 2.3.4 Prehistoric Collections Page (prehistoric.html)
- Collection overview with historical timelines
- Featured artifacts with images and detailed descriptions
- Archaeological context and significance

#### 2.3.5 Ethnographic Exhibit Page (ethnographic.html)
- Traditional clothing, tools, and ritual objects
- Cultural origins and contextual information
- Ethnographic significance explanations

#### 2.3.6 Special Exhibitions Page (exhibitions.html)
- Current and upcoming temporary exhibitions
- Exhibition details and curator notes
- Featured items and themes

#### 2.3.7 Contact Page (contact.html)
- Email contact form with fields: Name, Email, Subject, Message
- Form connected to museum's official email address
- Submission confirmation message
\n### 2.4 AI-Powered Chat Assistant Page (chat.html)

#### 2.4.1 Layout and UI Requirements
- Fixed chat window with defined width and height
- Chat container must prevent horizontal overflow under all conditions
- Message area with vertical scrolling capability
- Auto-scroll to latest message after each new message
- Modern rounded message bubbles design
- Clear visual distinction between user messages and AI responses
- Input field fixed at bottom of chat window
- Messages area grows and scrolls naturally with conversation length
\n#### 2.4.2 Text Overflow Prevention (Critical)\n- Implement robust text wrapping using:
  - max-width constraints
  - overflow-wrap: break-word
  - word-wrap: break-word\n  - white-space: pre-wrap
- Use textContent only for message injection (no innerHTML)\n- Handle long paragraphs and long words without breaking layout
- Messages must always stay inside chat container boundaries

#### 2.4.3 Multi-Language Support
- Full UI translation for Arabic (RTL) and French (LTR)
- Translated elements:
  - Chat page title\n  - Input placeholder text
  - Send button label
  - Welcome message
- Language switcher (AR / FR) integrated in chat interface
- Proper RTL handling for Arabic: text direction and alignment
- Language preference stored in localStorage

#### 2.4.4 Default Welcome Messages
- Arabic: 'مرحبًا بك! أنا المرشد الذكي للمتحف، يمكنك سؤالي عن التاريخ أو القطع الأثرية.'
- French: 'Bienvenue ! Je suis le guide intelligent du musée. Vous pouvez me poser des questions sur l'histoire et les collections.'
\n#### 2.4.5 Knowledge Base Content
- Museum history and background information
- Collection details and artifact descriptions
- Visitor guidance: location, schedule, access information
- Up to 10 distinct response variations for refined answers\n- Contextually accurate answers based on curated content

#### 2.4.6 Technical Implementation
- Pure HTML, CSS, and Vanilla JavaScript only\n- No external libraries or frameworks\n- Semantic HTML structure
- Clean, readable, commented code\n- Smooth scrolling behavior\n- Responsive design for desktop and mobile devices
- Chat layout must remain functional under all screen sizes

### 2.5 Backend Integration
- Firebase backend for:
  - Contact form submission storage
  - AI usage metrics tracking (optional)
- Secure data handling and storage

### 2.6 SEO and Accessibility
- Complete metadata for all pages
- Alt tags for all images
- ARIA labels for accessibility
- Mobile-first responsive design
- Fast loading optimization

## 3. Content Sources
- Wikipedia: Bardo National Museum (Algiers) article
- Google Maps: Location photos of building exterior, galleries, and artifacts
- Official museum descriptions and documentation

## 4. Design Style

### 4.1 Color Palette
- Primary colors: Warm beige (#E8DCC4), deep brown (#5C4033), cream white (#FAF7F2)
- Accent color: Terracotta (#C1876B) for highlights and interactive elements
- Dark mode: Charcoal (#2C2C2C) background with warm accent tones

### 4.2 Typography
- Clean, readable serif fonts for headings to evoke classical museum aesthetic
- Sans-serif fonts for body text ensuring modern readability
- Appropriate font sizes for multilingual content (Arabic, French, English)

### 4.3 Layout and Visual Elements
- Museum-like grid layout with generous whitespace
- Card-based design for artifact and exhibition displays
- Consistent image galleries with hover effects
- Subtle shadows and rounded corners (4-6px) for depth
- Smooth fade-in animations for content loading

### 4.4 Navigation
- Fixed header with language switcher and theme toggle\n- Clear navigation menu with dropdown for sections
- Footer containing address, operating hours, and social media links\n- Consistent navigation across all HTML pages using relative links

## 5. Technical Requirements

### 5.1 Static Website Architecture
- Pure HTML5, CSS3, and Vanilla JavaScript implementation
- No React, TypeScript, or JavaScript frameworks\n- All pages can be opened directly in a browser without build tools
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

### 5.2 File Structure
```
project-root/
├── index.html (home page)
├── about.html\n├── blog.html
├── prehistoric.html
├── ethnographic.html
├── exhibitions.html
├── contact.html
├── chat.html
├── css/
│   ├── main.css (global styles)
│   ├── theme.css (dark/light mode)
│   ├── responsive.css (media queries)
│   └── chat.css (chat page specific)\n├── js/
│   ├── main.js (global functionality)
│   ├── language.js (multilingual support)
│   ├── theme.js (theme switching)
│   └── chat.js (AI chat functionality)
└── images/
    ├── hero/
    ├── artifacts/
    ├── exhibitions/
    └── icons/
```

### 5.3 Responsive Design
- Mobile-first approach
- Breakpoints for mobile, tablet, and desktop views
- Touch-friendly interface elements
- Chat interface must work perfectly on all device sizes

### 5.4 Performance
- Optimized image loading with lazy loading
- Minified CSS and JavaScript
- Fast page load times (under 3 seconds)
- Inline critical CSS for above-the-fold content
\n### 5.5 Deployment\n- Deployment-ready for Firebase Hosting, Netlify, or any static hosting platform
- SSL certificate for secure connections
- CDN integration for global accessibility
- All files ready to use without compilation or build process

## 6. Deliverables
- Complete static HTML website with all pages (index.html, about.html, contact.html, etc.)
- Organized CSS folder with all styling files
- Images folder with all visual assets properly linked
- JavaScript files for interactivity (language switching, theme toggle, chat functionality)\n- Fully responsive frontend website
- Complete multilingual content (Arabic, French, English)
- Production-ready AI chat page with robust layout
- Integrated AI assistant with knowledge base\n- Functional email submission feature\n- Dark/Light mode implementation\n- Deployment-ready codebase with no placeholders or pseudo-code
- All files can be opened directly in browser without any build tools or frameworks