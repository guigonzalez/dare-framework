# DARE Framework - Component Architecture

---

## Overview

This document provides detailed documentation of all React components in the DARE Framework, including their purpose, props, state, and relationships.

---

## Component Hierarchy

```
App
├── Header
├── Router
│   ├── HomePage
│   │   ├── HeroSection
│   │   ├── AboutSection
│   │   ├── FrameworkSection
│   │   ├── ResourcesSection
│   │   ├── BenefitsSection
│   │   ├── ManifestoSection
│   │   └── ContributeSection
│   └── NotFound
└── Footer
```

---

## Core Application Components

### App.tsx

**Purpose:** Root application component that sets up routing and global providers.

**Structure:**
```tsx
<TooltipProvider>
  <Toaster />
  <div className="flex flex-col min-h-screen">
    <Header />
    <Router />
    <Footer />
  </div>
</TooltipProvider>
```

**Key Features:**
- Sets up Wouter routing
- Provides tooltip context globally
- Configures toast notification system
- Implements flexbox layout (header, main, footer)

**Dependencies:**
- `wouter` for routing
- `@/components/ui/toaster` for notifications
- `@/components/ui/tooltip` for tooltip context

---

### Router Component

**Purpose:** Handles client-side routing.

**Routes:**
```tsx
<Switch>
  <Route path="/" component={HomePage} />
  <Route component={NotFound} />
</Switch>
```

**Route Definitions:**
- `/` → HomePage (main landing page)
- `*` → NotFound (404 page)

---

## Page Components

### HomePage.tsx

**Purpose:** Main landing page that composes all content sections.

**Location:** `src/pages/HomePage.tsx`

**Structure:**
```tsx
<main className="flex-grow">
  <HeroSection />
  <AboutSection />
  <FrameworkSection />
  <ResourcesSection />
  <BenefitsSection />
  <ManifestoSection />
  <ContributeSection />
</main>
```

**Composition:**
- Pure presentational component
- No state or props
- Composes 7 major sections
- Uses semantic `<main>` element

**Sections Order:**
1. Hero (call to action)
2. About (project introduction)
3. Framework (6 levels)
4. Resources (tools and materials)
5. Benefits (why use DARE)
6. Manifesto (philosophy)
7. Contribute (community engagement)

---

### not-found.tsx

**Purpose:** 404 error page for unmatched routes.

**Location:** `src/pages/not-found.tsx`

**Features:**
- Error message display
- Navigation back to home
- Consistent branding

---

## Section Components

### HeroSection.tsx

**Purpose:** Hero banner with project title and call-to-action.

**Location:** `src/components/HeroSection.tsx`

**Visual Elements:**
```
┌─────────────────────────────────┐
│  [Background Pattern: Grid+Dots] │
│                                  │
│  🏷️ Open Source - AI Made       │
│                                  │
│  Design AI Reliable              │
│  Engagement Framework            │
│                                  │
│  Description text...             │
│                                  │
│  [Explorar Framework Button]    │
│                                  │
│  ～～～～～～～～～～～～～～      │
└─────────────────────────────────┘
```

**Key Features:**
- Gradient background (primary → blue-700)
- SVG pattern overlay (grid + dots)
- Badge component for "Open Source" label
- Gradient text effect on "Engagement Framework"
- CTA button with smooth anchor scroll to #framework
- Wave SVG at bottom for smooth transition

**Styling Highlights:**
- `bg-gradient-to-br from-primary/90 via-primary to-blue-700`
- Responsive padding: `py-16 sm:py-24 md:py-28 lg:py-32`
- Text gradient: `bg-gradient-to-r from-white to-blue-200 bg-clip-text`

---

### AboutSection.tsx

**Purpose:** Introduces the DARE Framework concept and purpose.

**Location:** `src/components/AboutSection.tsx`

**Content:**
- What is DARE Framework
- Problem it solves
- Target audience
- Key benefits overview

---

### FrameworkSection.tsx

**Purpose:** Interactive presentation of the 6 AI adoption levels.

**Location:** `src/components/FrameworkSection.tsx`

**Lines of Code:** 513 (most complex component)

**State:**
```tsx
const [activeLevel, setActiveLevel] = useState(0);
```

**Refs:**
```tsx
const humanControlBarRef = useRef<HTMLDivElement>(null);
const speedBarRef = useRef<HTMLDivElement>(null);
const aiDependencyBarRef = useRef<HTMLDivElement>(null);
const progressBarRef = useRef<HTMLDivElement>(null);
```

**Data Source:**
```tsx
import { frameworkLevels } from '@/data/frameworkLevels';
```

**Custom Hooks:**
```tsx
const isMobile = useIsMobile();
```

#### Sub-sections

**1. Level Selector (Desktop)**
- 6 clickable buttons (Level 0 → Level 5)
- Active state styling
- Horizontal layout with responsive wrapping

**2. Level Details Display**
- Gradient sidebar with level info:
  - Badge (Nível X)
  - Name (full level name)
  - Tagline (italic quote)
  - Tools (if available)
  - Appropriate Uses (if available)
- Main content area:
  - Description
  - Pros (green box)
  - Cons (red box)
  - Risks (amber box)
- Navigation arrows (Previous/Next)

**3. Mobile View**
- Simplified navigation header
- Single level display
- Previous/Next buttons
- Compact card layout

**4. Evolution Framework Visual**
- Progress bar connecting level circles
- 3 animated metrics:
  - **Human Control** (green, decreases)
  - **Speed** (blue, increases)
  - **AI Dependency** (amber, increases)

**Metric Values:**
```tsx
const humanControlValues = [100, 90, 75, 60, 40, 20];
const speedValues = [16, 30, 50, 70, 85, 95];
const aiDependencyValues = [0, 15, 35, 60, 80, 95];
```

**Effects:**
```tsx
useEffect(() => {
  // Update metric bar widths when activeLevel changes
  humanControlBarRef.current.style.width = `${humanControlValues[activeLevel]}%`;
  speedBarRef.current.style.width = `${speedValues[activeLevel]}%`;
  aiDependencyBarRef.current.style.width = `${aiDependencyValues[activeLevel]}%`;
  progressBarRef.current.style.width = `${activeLevel * 20}%`;
}, [activeLevel]);
```

**Interactions:**
```tsx
const handleLevelChange = (levelIndex: number) => {
  setActiveLevel(levelIndex);
};

const navigateLevel = (direction: 'next' | 'prev') => {
  if (direction === 'next' && activeLevel < levels.length - 1) {
    setActiveLevel(activeLevel + 1);
  } else if (direction === 'prev' && activeLevel > 0) {
    setActiveLevel(activeLevel - 1);
  }
};
```

---

### ResourcesSection.tsx

**Purpose:** Display curated resources, tools, and materials.

**Location:** `src/components/ResourcesSection.tsx`

**Potential Features:**
- Resource cards
- Filtering by category
- Modal for detailed view (ResourceModal)
- External links to tools

---

### BenefitsSection.tsx

**Purpose:** Highlight benefits of using the DARE Framework.

**Location:** `src/components/BenefitsSection.tsx`

**Typical Content:**
- Strategic decision-making
- Risk awareness
- Balanced AI adoption
- Team alignment

---

### ManifestoSection.tsx

**Purpose:** Present the framework's philosophy and principles.

**Location:** `src/components/ManifestoSection.tsx`

**Content:**
- Core values
- Design principles
- Human-AI collaboration philosophy
- Ethical considerations

---

### ContributeSection.tsx

**Purpose:** Encourage community contributions.

**Location:** `src/components/ContributeSection.tsx`

**Features:**
- Call to action for contributions
- GitHub repository link
- Contribution guidelines
- Community engagement options

---

### Header.tsx

**Purpose:** Global navigation header.

**Location:** `src/components/Header.tsx`

**Features:**
- Logo/brand name
- Navigation links (smooth scroll)
- Responsive mobile menu
- Sticky positioning (optional)

**Navigation Links:**
- Home
- About (#about)
- Framework (#framework)
- Resources (#resources)
- Contribute (#contribute)

---

### Footer.tsx

**Purpose:** Site footer with metadata and links.

**Location:** `src/components/Footer.tsx`

**Typical Content:**
- Copyright notice
- Social media links
- GitHub repository link
- License information
- Creator credits

---

## Modal Components

### ResourceModal.tsx

**Purpose:** Modal dialog for displaying detailed resource information.

**Location:** `src/components/ResourceModal.tsx`

**Likely Props:**
```tsx
interface ResourceModalProps {
  resource: Resource;
  isOpen: boolean;
  onClose: () => void;
}
```

**Features:**
- Dialog overlay
- Resource title and description
- External links
- Close button
- Keyboard shortcuts (ESC)

---

## UI Component Library

### Component Categories

The project includes 50+ reusable UI components from shadcn/ui + Radix UI:

#### Form Components
- `button.tsx` - Buttons with variants
- `input.tsx` - Text inputs
- `input-otp.tsx` - One-time password inputs
- `checkbox.tsx` - Checkboxes
- `radio-group.tsx` - Radio button groups
- `select.tsx` - Dropdown selects
- `slider.tsx` - Range sliders
- `switch.tsx` - Toggle switches
- `toggle.tsx` - Toggle buttons
- `toggle-group.tsx` - Grouped toggles
- `label.tsx` - Form labels

#### Layout Components
- `card.tsx` - Card containers
- `separator.tsx` - Dividers
- `tabs.tsx` - Tabbed interfaces
- `accordion.tsx` - Collapsible sections
- `collapsible.tsx` - Toggle visibility
- `sheet.tsx` - Side sheets/drawers
- `drawer.tsx` - Bottom drawers (mobile)
- `resizable.tsx` - Resizable panels
- `scroll-area.tsx` - Custom scrollbars
- `aspect-ratio.tsx` - Maintain aspect ratios

#### Navigation Components
- `navigation-menu.tsx` - Navigation menus
- `menubar.tsx` - Menu bars
- `dropdown-menu.tsx` - Dropdown menus
- `context-menu.tsx` - Right-click menus
- `breadcrumb.tsx` - Breadcrumb navigation
- `pagination.tsx` - Pagination controls
- `command.tsx` - Command palette (⌘K)

#### Feedback Components
- `alert.tsx` - Alert messages
- `alert-dialog.tsx` - Confirmation dialogs
- `toast.tsx` - Toast notifications
- `toaster.tsx` - Toast container
- `tooltip.tsx` - Tooltips
- `hover-card.tsx` - Hover popovers
- `popover.tsx` - Popovers
- `progress.tsx` - Progress indicators
- `dialog.tsx` - Modal dialogs

#### Data Display Components
- `avatar.tsx` - User avatars
- `badge.tsx` - Badge labels
- `calendar.tsx` - Date calendar
- `chart.tsx` - Charts (Recharts wrapper)
- `carousel.tsx` - Image carousels

---

## Component Patterns

### Pattern 1: Primitive Wrappers

UI components wrap Radix UI primitives with custom styling:

```tsx
import * as TabsPrimitive from "@radix-ui/react-tabs"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
```

**Benefits:**
- Accessibility built-in
- Consistent API
- Customizable styling
- Type-safe props

---

### Pattern 2: Variant-based Components

Using `class-variance-authority` for component variants:

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
  }
)
```

**Usage:**
```tsx
<Button variant="outline" size="lg">Click me</Button>
```

---

### Pattern 3: Composition

Components are highly composable:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {children}
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Pattern 4: Custom Hooks

Extract reusable logic into custom hooks:

```tsx
// useIsMobile hook
import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}
```

**Usage in components:**
```tsx
const isMobile = useIsMobile();

return (
  <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>
    {content}
  </div>
);
```

---

## Data Flow

### Static Data Pattern

Framework levels are defined as static TypeScript data:

```
frameworkLevels.ts (data/frameworkLevels.ts)
    ↓
FrameworkSection.tsx (imports data)
    ↓
Renders interactive UI
```

**No API calls or backend required** - all data is bundled at build time.

---

## Responsive Design Strategy

### Breakpoints (Tailwind defaults)

```
sm:  640px   // Small tablets
md:  768px   // Tablets
lg:  1024px  // Laptops
xl:  1280px  // Desktops
2xl: 1536px  // Large desktops
```

### Responsive Patterns Used

**1. Conditional Rendering:**
```tsx
const isMobile = useIsMobile();

return (
  <>
    <div className={isMobile ? 'block' : 'hidden'}>
      {/* Mobile view */}
    </div>
    <div className={isMobile ? 'hidden' : 'block'}>
      {/* Desktop view */}
    </div>
  </>
);
```

**2. Responsive Classes:**
```tsx
<div className="py-16 sm:py-24 md:py-28 lg:py-32">
  {/* Padding increases with screen size */}
</div>
```

**3. Grid Responsiveness:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

---

## Accessibility Features

### Radix UI Primitives

All interactive components built on Radix UI include:
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ ARIA attributes
- ✅ Screen reader support

### Semantic HTML

```tsx
<main className="flex-grow">  {/* Semantic main element */}
  <section id="framework">    {/* Semantic sections */}
    <h2>Heading</h2>          {/* Proper heading hierarchy */}
  </section>
</main>
```

### Focus Indicators

```tsx
className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
```

---

## Performance Considerations

### Current Optimizations

1. **Vite HMR** - Fast hot module replacement
2. **Tree Shaking** - Unused code removed
3. **Code Splitting** - Potential for route-based splitting
4. **CSS Purging** - Tailwind removes unused CSS

### Potential Optimizations

1. **Lazy Loading:**
```tsx
const FrameworkSection = React.lazy(() => import('./FrameworkSection'));

<Suspense fallback={<Loading />}>
  <FrameworkSection />
</Suspense>
```

2. **Memoization:**
```tsx
const MemoizedFrameworkLevel = React.memo(FrameworkLevel);
```

3. **Virtual Scrolling** for long lists

---

## Component Testing Strategy

### Recommended Approach

**Unit Tests (Vitest):**
```tsx
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

test('renders hero title', () => {
  render(<HeroSection />);
  expect(screen.getByText(/Design AI Reliable/i)).toBeInTheDocument();
});
```

**Component Tests (React Testing Library):**
```tsx
import { render, fireEvent } from '@testing-library/react';
import FrameworkSection from './FrameworkSection';

test('changes level on button click', () => {
  const { getByText } = render(<FrameworkSection />);
  const level1Button = getByText('IA Assistiva');
  fireEvent.click(level1Button);
  expect(getByText(/Nível 1/i)).toBeInTheDocument();
});
```

---

## Future Component Enhancements

### Recommended Additions

1. **Loading States**
   - Skeleton components
   - Spinner components
   - Progress indicators

2. **Error Boundaries**
   - Graceful error handling
   - Fallback UI

3. **Animation Components**
   - Page transitions
   - Scroll animations
   - Entrance animations

4. **Assessment Components**
   - Quiz component
   - Result calculator
   - Recommendation engine

---

**Document Version:** 1.0
**Last Updated:** October 13, 2025
