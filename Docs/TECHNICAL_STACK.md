# DARE Framework - Technical Stack Documentation

---

## Overview

This document provides a comprehensive breakdown of all technologies, libraries, and tools used in the DARE Framework project.

---

## Core Technologies

### Frontend Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | Core UI library for building component-based interfaces |
| **React DOM** | 18.3.1 | React rendering for web browsers |
| **TypeScript** | 5.6.3 | Type-safe JavaScript superset for better DX and fewer bugs |

### Build Tool

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vite** | 5.4.14 | Fast build tool and dev server with HMR (Hot Module Replacement) |
| **@vitejs/plugin-react** | 4.3.2 | Official Vite plugin for React support with Fast Refresh |

---

## Styling & UI

### CSS Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework for rapid UI development |
| **PostCSS** | 8.4.47 | CSS transformation tool for Tailwind processing |
| **Autoprefixer** | 10.4.20 | Automatically adds vendor prefixes to CSS |
| **@tailwindcss/typography** | 0.5.15 | Beautiful typographic defaults for prose content |

### Tailwind Utilities

| Library | Version | Purpose |
|---------|---------|---------|
| **tailwindcss-animate** | 1.0.7 | Animation utilities for Tailwind |
| **tw-animate-css** | 1.2.5 | Additional animation classes |
| **tailwind-merge** | 2.6.0 | Merge Tailwind classes without style conflicts |
| **clsx** | 2.1.1 | Utility for constructing className strings conditionally |
| **class-variance-authority** | 0.7.1 | Creating variant-based component APIs |

---

## UI Component Libraries

### Radix UI Primitives

All Radix UI components are unstyled, accessible primitives:

| Component | Version | Purpose |
|-----------|---------|---------|
| **@radix-ui/react-accordion** | 1.2.4 | Accessible accordion/collapsible panels |
| **@radix-ui/react-alert-dialog** | 1.1.7 | Modal dialog for critical confirmations |
| **@radix-ui/react-aspect-ratio** | 1.1.3 | Maintain aspect ratios for media |
| **@radix-ui/react-avatar** | 1.1.4 | Avatar component with fallback |
| **@radix-ui/react-checkbox** | 1.1.5 | Accessible checkbox input |
| **@radix-ui/react-collapsible** | 1.1.4 | Expandable/collapsible content |
| **@radix-ui/react-context-menu** | 2.2.7 | Right-click context menus |
| **@radix-ui/react-dialog** | 1.1.7 | Modal dialogs and overlays |
| **@radix-ui/react-dropdown-menu** | 2.1.7 | Dropdown menus with keyboard navigation |
| **@radix-ui/react-hover-card** | 1.1.7 | Hover-triggered popover cards |
| **@radix-ui/react-label** | 2.1.3 | Accessible form labels |
| **@radix-ui/react-menubar** | 1.1.7 | Desktop-style menu bar |
| **@radix-ui/react-navigation-menu** | 1.2.6 | Navigation menu with flyouts |
| **@radix-ui/react-popover** | 1.1.7 | Floating popover content |
| **@radix-ui/react-progress** | 1.1.3 | Progress indicators |
| **@radix-ui/react-radio-group** | 1.2.4 | Radio button groups |
| **@radix-ui/react-scroll-area** | 1.2.4 | Custom scrollable areas |
| **@radix-ui/react-select** | 2.1.7 | Accessible select dropdowns |
| **@radix-ui/react-separator** | 1.1.3 | Visual or semantic separators |
| **@radix-ui/react-slider** | 1.2.4 | Range slider inputs |
| **@radix-ui/react-slot** | 1.2.0 | Composition utility for merging props |
| **@radix-ui/react-switch** | 1.1.4 | Toggle switch inputs |
| **@radix-ui/react-tabs** | 1.1.4 | Tabbed interfaces |
| **@radix-ui/react-toast** | 1.2.7 | Toast notifications |
| **@radix-ui/react-toggle** | 1.1.3 | Toggle buttons |
| **@radix-ui/react-toggle-group** | 1.1.3 | Grouped toggle buttons |
| **@radix-ui/react-tooltip** | 1.2.0 | Tooltips on hover/focus |

### Other UI Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| **cmdk** | 1.1.1 | Command palette (⌘K) interface |
| **vaul** | 1.1.2 | Drawer component for mobile |
| **input-otp** | 1.4.2 | One-time password input fields |
| **embla-carousel-react** | 8.6.0 | Lightweight carousel/slider |

---

## Icons & Graphics

| Library | Version | Purpose |
|---------|---------|---------|
| **lucide-react** | 0.453.0 | Beautiful, consistent icon set (primary icons) |
| **react-icons** | 5.4.0 | Popular icon library collection |

---

## Routing

| Library | Version | Purpose |
|---------|---------|---------|
| **wouter** | 3.3.5 | Minimalist routing library for React (1.3KB) |

---

## Forms & Validation

| Library | Version | Purpose |
|---------|---------|---------|
| **react-hook-form** | 7.55.0 | Performant form management with hooks |
| **@hookform/resolvers** | 3.10.0 | Validation resolvers for react-hook-form |
| **zod** | 3.24.2 | TypeScript-first schema validation |
| **zod-validation-error** | 3.4.0 | Human-readable Zod error messages |

---

## Animation

| Library | Version | Purpose |
|---------|---------|---------|
| **framer-motion** | 11.13.1 | Production-ready animation library for React |

---

## Data Visualization

| Library | Version | Purpose |
|---------|---------|---------|
| **recharts** | 2.15.2 | Composable charting library built on React components |

---

## Layout & UI Utilities

| Library | Version | Purpose |
|---------|---------|---------|
| **react-resizable-panels** | 2.1.7 | Resizable panel layouts |
| **next-themes** | 0.4.6 | Theme management (dark mode support) |

---

## Date & Time

| Library | Version | Purpose |
|---------|---------|---------|
| **date-fns** | 3.6.0 | Modern date utility library |
| **react-day-picker** | 8.10.1 | Date picker component |

---

## Development Tools

### TypeScript

| Tool | Version | Purpose |
|------|---------|---------|
| **@types/node** | 20.16.11 | Node.js type definitions |
| **@types/react** | 18.3.11 | React type definitions |
| **@types/react-dom** | 18.3.1 | React DOM type definitions |

### Configuration

| File | Purpose |
|------|---------|
| **tsconfig.json** | TypeScript compiler configuration |
| **vite.config.ts** | Vite build tool configuration |
| **tailwind.config.ts** | Tailwind CSS theme and plugin configuration |
| **postcss.config.js** | PostCSS processing configuration |
| **components.json** | shadcn/ui component library configuration |

---

## Deployment & CI/CD

### GitHub Actions

| Workflow | Purpose |
|----------|---------|
| **.github/workflows/gh-pages.yml** | Automated build and deployment to GitHub Pages |

**Workflow Features:**
- Node.js 20 runtime
- npm caching for faster builds
- Automated deployment on push to `main`
- Support for custom domains via CNAME

### Hosting

| Platform | Purpose |
|----------|---------|
| **GitHub Pages** | Static site hosting with automatic SSL |

---

## Architecture Patterns

### Component Pattern
- **Functional Components** with React Hooks
- **Composition over Inheritance**
- **Presentational vs Container Components**

### Styling Pattern
- **Utility-First CSS** (Tailwind)
- **Component Variants** (CVA - Class Variance Authority)
- **Responsive Design** (Mobile-first approach)

### State Management
- **Local State:** useState, useReducer
- **Side Effects:** useEffect
- **Refs:** useRef for DOM manipulation
- **Custom Hooks:** Encapsulated logic (e.g., useIsMobile)

### Type System
- **TypeScript Interfaces** for data models
- **Type Inference** where possible
- **Generic Types** for reusable components
- **Strict Mode** enabled

---

## File Organization

### Directory Structure Philosophy

```
client/src/
├── components/          # UI components
│   ├── ui/             # Reusable primitive components (shadcn/ui)
│   └── [Feature]Section.tsx  # Section components
├── pages/              # Route components
├── data/               # Static data and constants
├── lib/                # Utilities and type definitions
├── hooks/              # Custom React hooks
└── [root files]        # App entry points and global styles
```

**Key Principles:**
- **Colocation:** Keep related files together
- **Separation of Concerns:** UI primitives separate from business components
- **Type Safety:** All data models defined in `lib/types.ts`
- **Path Aliases:** `@/` prefix for cleaner imports

---

## Performance Optimizations

### Build Optimizations
- **Tree Shaking:** Vite automatically removes unused code
- **Code Splitting:** Route-based splitting possible with React.lazy
- **Asset Optimization:** Vite optimizes images and assets
- **Minification:** Production builds are minified and compressed

### Runtime Optimizations
- **React 18 Features:** Automatic batching, concurrent rendering
- **Lazy Loading:** Dynamic imports for heavy components
- **Memoization Opportunities:** useMemo, useCallback (not heavily used yet)

---

## Browser Support

Based on Vite and React 18 requirements:

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 87+ |
| Firefox | 78+ |
| Safari | 14+ |
| Edge | 88+ |

**Note:** ES2020 features required, no IE11 support.

---

## Security Considerations

### Dependencies
- All dependencies are from trusted npm sources
- Radix UI components are accessibility-focused and battle-tested
- React 18 includes built-in XSS protections

### Build Security
- GitHub Actions runs in isolated environments
- No secrets required for public repository deployment
- Dependencies installed via `npm ci` for reproducible builds

---

## Accessibility Standards

### WCAG Compliance
- **Target Level:** WCAG 2.1 AA
- **Strategy:** Using Radix UI primitives (built with accessibility in mind)

**Accessibility Features:**
- Keyboard navigation support
- ARIA attributes on interactive elements
- Focus management in modals and dialogs
- Screen reader friendly
- Color contrast compliance (Tailwind default colors)

---

## License

All dependencies are MIT-licensed or similarly permissive open-source licenses.

**Project License:** MIT

---

## Package Manager

**npm** is used as the primary package manager.

**Lock File:** `package-lock.json` ensures reproducible installs.

---

## Version Control

| Tool | Purpose |
|------|---------|
| **Git** | Version control system |
| **.gitignore** | Excludes node_modules, dist, .env files |

---

## Scripts Available

Root `package.json` scripts:

```json
{
  "dev": "cd client && npm run dev",
  "build": "cd client && npm run build",
  "preview": "cd client && npm run preview",
  "install:client": "cd client && npm install"
}
```

Client `package.json` scripts:

```json
{
  "dev": "vite",                    // Development server (port 5173)
  "build": "vite build",            // Production build
  "preview": "vite preview"         // Preview production build
}
```

---

## Environment

### Development
- **Dev Server:** Vite dev server with HMR
- **Port:** 5173 (default)
- **Hot Reload:** Instant updates on file changes

### Production
- **Build Output:** `client/dist/`
- **Optimization:** Minified, tree-shaken, optimized assets
- **Deployment:** Static files hosted on GitHub Pages

---

## Future Technology Considerations

### Potential Additions

**Testing:**
- Vitest (unit tests)
- React Testing Library (component tests)
- Playwright or Cypress (E2E tests)

**Code Quality:**
- ESLint (linting)
- Prettier (formatting)
- Husky (git hooks)
- Commitlint (commit message standards)

**Internationalization:**
- react-i18next (translations)

**State Management:**
- Zustand or Jotai (lightweight state management)

**Analytics:**
- Google Analytics or Plausible

**Backend (if needed):**
- Supabase or Firebase (BaaS)
- tRPC (type-safe API)

---

**Document Version:** 1.0
**Last Updated:** October 13, 2025
