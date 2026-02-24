# Architecture & Design System

This document outlines the architecture decisions and design system for the Amplit AI website.

---

## Design Philosophy

The website follows the **Arina.ai design language** adapted for Amplit AI's healthcare focus:

1. **Dark Hero Sections** - Establish brand authority
2. **Light Content Sections** - Improve readability for detailed content
3. **Card-Based Layouts** - Organize information into digestible chunks
4. **Subtle Animations** - Add polish without distraction
5. **Gradient Accents** - Create visual interest with brand colors

---

## Color System

### Primary Palette

```typescript
const BRAND_COLORS = {
  primary: '#6594B1',      // Teal blue - main brand color
  primaryDark: '#4A7A99',  // Hover states
  primaryLight: '#8AB4CC', // Gradient endpoints
};
```

### Dark Mode Palette

```typescript
const darkPalette = {
  dark: '#0D1117',         // Primary dark background
  darkAlt: '#161B22',      // Secondary dark background
  border: '#30363d',       // Dark mode borders
};
```

### Light Mode Palette

```typescript
const lightPalette = {
  white: '#FFFFFF',
  lightAlt: '#F6F8FA',     // Light gray background
  border: '#D0D7DE',       // Light mode borders
};
```

### Text Colors

| Context | Dark BG | Light BG |
|---------|---------|----------|
| Headlines | `#FFFFFF` | `#1A1A1A` |
| Body | `#8B949E` | `#4A4A4A` |
| Muted | `#6E7681` | `#6B6B6B` |

---

## Layout System

### Container

```css
.max-w-7xl mx-auto px-6
```

Max width of 1280px with horizontal padding.

### Section Spacing

```css
.py-24  /* 96px vertical padding for sections */
.py-16  /* 64px for smaller sections */
```

### Grid Layouts

```css
/* 2-column */
.grid md:grid-cols-2 gap-8

/* 3-column */
.grid md:grid-cols-2 lg:grid-cols-3 gap-6

/* 4-column */
.grid md:grid-cols-2 lg:grid-cols-4 gap-6
```

---

## Animation Patterns

### Entrance Animation

```tsx
initial={{ opacity: 0, y: 30 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6 }}
```

### Stagger Children

```tsx
transition={{ duration: 0.6, delay: index * 0.1 }}
```

### Hover Effects

```css
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(101, 148, 177, 0.15);
}
```

---

## Component Hierarchy

```
RootLayout
├── Navigation (sticky)
├── Main Content
│   └── Page Component
│       ├── Hero Section (gradient-hero)
│       ├── Content Sections (alternating bg)
│       └── CTA Section (gradient-cta)
└── Footer
```

---

## File Organization

### Pages (App Router)

```
app/
├── page.tsx              # Home
├── [product]/page.tsx    # Product pages
├── about/page.tsx        # About
├── contact/page.tsx      # Contact
└── api/                  # API routes
```

### Components

```
components/
├── navigation.tsx        # Global nav
├── footer.tsx            # Global footer
├── home/                 # Home page sections
├── products/             # Product page components
├── about/                # About page components
└── contact/              # Contact page components
```

### Lib

```
lib/
├── constants.ts          # Brand colors, contact info, nav
├── utils.ts              # Utility functions
└── types.ts              # TypeScript types
```

---

## Best Practices

### 1. Use Client Components Sparingly

```tsx
'use client';  // Only when needed for interactivity
```

### 2. Import from Constants

```tsx
import { BRAND_COLORS, CONTACT_INFO, NAV_LINKS } from '@/lib/constants';
```

### 3. Use Semantic HTML

```tsx
<section>  // For page sections
<article>  // For self-contained content
<nav>      // For navigation
<header>   // For page/section headers
```

### 4. Responsive Design

```css
/* Mobile first */
.text-4xl md:text-5xl lg:text-6xl
```
