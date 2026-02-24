# Component Documentation

This document details all components used in the Amplit AI website, their props, and usage examples.

---

## Layout Components

### Navigation (`components/navigation.tsx`)

Responsive header navigation with dropdown menu support.

**Features:**
- Sticky header with blur backdrop
- Mobile hamburger menu with animations
- Products dropdown with sub-links
- Active route highlighting
- CTA buttons (Request Demo, Contact Us)

**Usage:**
```tsx
import Navigation from '@/components/navigation';

// Used in layout.tsx
<Navigation />
```

**Dependencies:**
- `framer-motion` for animations
- `lucide-react` for icons (Menu, X, ChevronDown)
- `NAV_LINKS` from constants

---

### Footer (`components/footer.tsx`)

Site footer with navigation, contact info, and branding.

**Features:**
- Logo display
- Quick links section
- Contact information with icons
- Copyright notice

**Usage:**
```tsx
import Footer from '@/components/footer';

// Used in layout.tsx
<Footer />
```

---

## Home Page Components

### HeroSection (`components/home/hero-section.tsx`)

Main hero with animated 3D-like floating cubes visualization.

**Features:**
- Animated floating cube elements
- Gradient text headline
- CTA buttons
- Responsive layout (2-column on desktop)

**Key Classes:**
- `gradient-hero` - Dark gradient background
- `gradient-text` - Primary color gradient text
- `float-animation` - Floating animation keyframes

---

### CoreCapabilities (`components/home/core-capabilities.tsx`)

Two-column card layout showing AI capabilities.

**Props per capability:**
```typescript
interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}
```

**Capabilities Included:**
1. Data Intelligence & Analysis
2. Adaptive User Interaction

---

### ProductsSection (`components/home/products-section.tsx`)

Product showcase with custom SVG illustrations.

**Products:**
1. **AcuCogn Scribe** - Clinical AI documentation
2. **Dentsi** - Voice AI for dental practices

**Card Features:**
- Badge (Clinical AI / Voice AI)
- Custom inline illustration
- Title, subtitle, description
- "Learn More" link

---

### KeyFeatures (`components/home/key-features.tsx`)

6-card grid showing platform features.

**Features Included:**
- Plug-&-Play Integrations
- Centralized & Secure AI
- Proprietary AI Models
- Precision & Security
- Infinite Scalability
- 24/7 Availability

---

### CTASection (`components/home/cta-section.tsx`)

Gradient call-to-action section.

**Features:**
- `gradient-cta` background class
- Centered content
- "Get In Touch" button

---

## Utility Classes

### Backgrounds

```css
.gradient-dark    /* Dark gradient for sections */
.gradient-hero    /* Hero-specific gradient */
.gradient-primary /* Primary color gradient */
.gradient-cta     /* CTA section gradient */
```

### Cards

```css
.card-dark   /* Dark card with blur backdrop */
.card-light  /* White card with subtle shadow */
.card-hover  /* Hover effect with lift and glow */
```

### Text

```css
.gradient-text  /* Primary gradient on text */
.nav-link       /* Navigation link styling */
```

### Buttons

```css
.btn-primary  /* Solid primary button */
.btn-outline  /* Outlined primary button */
```

---

## Creating New Components

Follow this pattern for consistency:

```tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconName } from 'lucide-react';

export default function NewComponent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-white py-24"> {/* or gradient-hero for dark */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Content */}
        </motion.div>
      </div>
    </section>
  );
}
```
