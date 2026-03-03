# 🏥 Amplit AI Portal

> **AI That Amplifies Care** — A modern healthcare AI company website built with Next.js 14, following the **Arina AI Design System**.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?logo=tailwindcss) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-ff69b4?logo=framer)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Components Used](#components-used)
- [Components That Can Be Created](#components-that-can-be-created)
- [Design System (Arina AI)](#design-system-arina-ai)
- [Getting Started](#getting-started)
- [Pages & Routes](#pages--routes)
- [API Routes](#api-routes)

---

## Overview

Amplit AI Portal is the corporate website for **Amplit AI**, a healthcare AI company based in Plano, Texas. It showcases two flagship products:

| Product | Description |
|---------|-------------|
| **AcuCogn Scribe** | Clinical AI documentation assistant for healthcare providers |
| **Dentsi** | AI Voice Agent for dental practices — handles calls, scheduling, follow-ups |

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 14 (App Router) | SSR, routing, API routes |
| **Language** | TypeScript 5.2 | Type safety |
| **Styling** | Tailwind CSS 3.3 | Utility-first CSS |
| **Animations** | Framer Motion 10 | Scroll & entrance animations |
| **UI Library** | Radix UI + shadcn/ui | 50+ accessible components |
| **Icons** | Lucide React | Consistent icon set |
| **Font** | Inter (Google Fonts) | Clean typography |
| **ORM** | Prisma 6.7 | Database access |
| **State** | Jotai | Atomic state management |
| **Forms** | React Hook Form + Zod | Form validation |
| **Charts** | Chart.js, Plotly, Recharts | Data visualization |

---

## Project Structure

```
Amplit-AI-Portal/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout (Nav + Footer)
│   ├── globals.css               # Global styles & CSS variables
│   ├── about/page.tsx            # About page
│   ├── contact/page.tsx          # Contact page
│   ├── acucogn-scribe/page.tsx   # AcuCogn Scribe product page
│   ├── dentsi/page.tsx           # Dentsi product page
│   └── api/contact/route.ts      # Contact form API endpoint
├── components/
│   ├── navigation.tsx            # Sticky header with dropdown
│   ├── footer.tsx                # Site footer
│   ├── feature-card.tsx          # Reusable feature card
│   ├── section-wrapper.tsx       # Section layout wrapper
│   ├── theme-provider.tsx        # Theme context provider
│   ├── home/                     # Home page sections
│   │   ├── hero-section.tsx      # Animated hero with 3D cubes
│   │   ├── core-capabilities.tsx # AI capabilities cards
│   │   ├── products-section.tsx  # Product showcase
│   │   ├── key-features.tsx      # 6-card feature grid
│   │   ├── value-props-section.tsx
│   │   └── cta-section.tsx       # Call-to-action banner
│   ├── products/                 # Product page components
│   │   ├── acucogn-hero.tsx
│   │   ├── acucogn-features.tsx
│   │   ├── acucogn-benefits.tsx
│   │   ├── dentsi-hero.tsx
│   │   ├── dentsi-features.tsx
│   │   ├── dentsi-benefits.tsx
│   │   └── product-cta.tsx
│   ├── about/                    # About page components
│   │   ├── about-hero.tsx
│   │   ├── about-mission.tsx
│   │   ├── about-values.tsx
│   │   └── about-cta.tsx
│   ├── contact/                  # Contact page components
│   │   ├── contact-hero.tsx
│   │   ├── contact-form.tsx
│   │   └── contact-info.tsx
│   └── ui/                       # 40+ shadcn/ui components
│       ├── accordion, alert-dialog, avatar, badge, button
│       ├── card, carousel, checkbox, collapsible, command
│       ├── context-menu, dialog, drawer, dropdown-menu
│       ├── form, hover-card, input, input-otp, label
│       ├── menubar, navigation-menu, pagination, popover
│       ├── progress, radio-group, resizable, scroll-area
│       ├── select, separator, sheet, skeleton, slider
│       ├── sonner, switch, table, tabs, task-card
│       ├── textarea, toast, toaster, toggle, toggle-group
│       └── tooltip
├── hooks/
│   └── use-toast.ts              # Toast notification hook
├── lib/
│   ├── constants.ts              # Brand colors, nav links, contact info
│   ├── types.ts                  # TypeScript type definitions
│   ├── utils.ts                  # Utility functions (cn helper)
│   └── db.ts                     # Prisma database client
├── prisma/
│   └── schema.prisma             # Database schema
├── public/
│   ├── logo.png                  # Amplit AI logo
│   ├── favicon.svg               # Browser favicon
│   └── og-image.png              # Open Graph social image
├── ARCHITECTURE.md               # Architecture & design decisions
├── COMPONENTS.md                 # Detailed component documentation
├── EXTENDING.md                  # Guide for creating new components
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Components Used

### 🔧 Layout Components (Custom)

| Component | File | Description |
|-----------|------|-------------|
| `Navigation` | `components/navigation.tsx` | Sticky header, mobile hamburger, products dropdown, active route highlighting |
| `Footer` | `components/footer.tsx` | Quick links, contact info, copyright |
| `SectionWrapper` | `components/section-wrapper.tsx` | Reusable section container with consistent spacing |
| `ThemeProvider` | `components/theme-provider.tsx` | Dark/light theme context |
| `FeatureCard` | `components/feature-card.tsx` | Reusable card with icon, title, description |

### 🏠 Home Page Components

| Component | Description |
|-----------|-------------|
| `HeroSection` | Animated 3D floating cubes, gradient text, dual CTA buttons |
| `CoreCapabilities` | 2-column cards: Data Intelligence & Adaptive User Interaction |
| `ProductsSection` | Product cards with SVG illustrations, badges, learn-more links |
| `KeyFeatures` | 6-card grid: Integrations, Security, AI Models, Scalability, Availability |
| `ValuePropsSection` | Value proposition highlights |
| `CTASection` | Gradient CTA banner with "Get In Touch" button |

### 🏥 Product Page Components

| Component | Used On | Description |
|-----------|---------|-------------|
| `AcucognHero` | `/acucogn-scribe` | Product hero with clinical AI messaging |
| `AcucognFeatures` | `/acucogn-scribe` | Feature breakdown for AcuCogn |
| `AcucognBenefits` | `/acucogn-scribe` | Benefits & ROI section |
| `DentsiHero` | `/dentsi` | Voice AI hero section |
| `DentsiFeatures` | `/dentsi` | Dentsi feature cards |
| `DentsiBenefits` | `/dentsi` | Dental practice benefits |
| `ProductCTA` | Both products | Shared CTA component |

### 📞 Contact & About Components

| Component | Description |
|-----------|-------------|
| `ContactHero` | Contact page hero |
| `ContactForm` | Form with validation (name, email, phone, message) |
| `ContactInfo` | Address, phone, email display with icons |
| `AboutHero` | Company story hero |
| `AboutMission` | Mission statement section |
| `AboutValues` | Core values grid |
| `AboutCTA` | About page call-to-action |

### 🎨 UI Components (shadcn/ui + Radix) — 40+ Components

| Category | Components |
|----------|-----------|
| **Feedback** | Alert, AlertDialog, Toast, Toaster, Sonner, Skeleton, Progress |
| **Navigation** | NavigationMenu, Menubar, Breadcrumb, Tabs, Pagination |
| **Data Display** | Card, Table, Badge, Avatar, HoverCard, Accordion, Collapsible |
| **Forms** | Button, Input, Textarea, Select, Checkbox, RadioGroup, Switch, Slider, Label, Form, InputOTP, DateRangePicker |
| **Overlays** | Dialog, Sheet, Drawer, Popover, Tooltip, DropdownMenu, ContextMenu, Command |
| **Layout** | AspectRatio, ScrollArea, Separator, Resizable, Carousel, ToggleGroup |

---

## 🆕 Components That Can Be Created (Arina AI Style)

These components align with the existing design system and would extend the portal:

### High Priority

| Component | Description | Pattern to Follow |
|-----------|-------------|-------------------|
| **`PricingSection`** | Tiered pricing cards (Free/Pro/Enterprise) | `card-dark` + `gradient-primary` for featured tier |
| **`TestimonialsCarousel`** | Patient/client testimonials with avatars | `embla-carousel-react` + `card-light` |
| **`BlogList` / `BlogPost`** | Blog/news section with MDX support | `gray-matter` already in deps; use `gradient-hero` for headers |
| **`DashboardLayout`** | Authenticated portal layout | Use existing `Tabs`, `Card`, `Table` components |
| **`AnalyticsDashboard`** | Charts showing AI performance metrics | `recharts` / `chart.js` already in deps |
| **`FAQSection`** | Expandable FAQ using Accordion | Use existing `Accordion` component |

### Medium Priority

| Component | Description | Pattern to Follow |
|-----------|-------------|-------------------|
| **`TeamSection`** | Team member cards with photos & roles | `Avatar` + `HoverCard` + stagger animation |
| **`IntegrationsGrid`** | Partner/integration logos grid | `card-light` with logo images |
| **`ROICalculator`** | Interactive savings calculator | `Slider` + `Input` + `Card` with live calculations |
| **`ComparisonTable`** | Feature comparison (us vs competitors) | `Table` component with `Badge` highlights |
| **`VideoHero`** | Hero section with background video | Replace cube animation with `<video>` element |
| **`NewsletterSignup`** | Email capture with validation | `Input` + `Button` + `Form` + API route |
| **`CaseStudyCard`** | Success story cards | `card-dark` + `Badge` + metrics display |
| **`StatusPage`** | Service uptime/status indicators | `Progress` + `Badge` (green/yellow/red) |

### Future / Advanced

| Component | Description | Pattern to Follow |
|-----------|-------------|-------------------|
| **`PatientPortal`** | Authenticated patient dashboard | Next-Auth + Prisma + `Sheet` for sidebar |
| **`AppointmentBooker`** | Calendly-like booking widget | `Calendar` + `DateRangePicker` + `Dialog` |
| **`LiveChatWidget`** | AI-powered chat bubble | Already has Abacus ChatLLM script in layout |
| **`NotificationCenter`** | Bell icon with notification dropdown | `Popover` + `ScrollArea` + `Badge` |
| **`SearchCommand`** | Cmd+K search palette | `Command` component (cmdk already in deps) |
| **`OnboardingWizard`** | Multi-step setup flow | `Tabs` + `Progress` + `Form` |

### Template for New Components (Arina AI Style)

```tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function NewComponent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Section <span className="gradient-text">Title</span>
          </h2>
          <p className="text-black/60 text-lg">Description</p>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## Design System (Arina AI)

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#6594B1` | CTAs, accents, links |
| `primaryDark` | `#4A7A99` | Hover states |
| `primaryLight` | `#8AB4CC` | Gradient endpoints |
| `dark` | `#0D1117` | Dark backgrounds |
| `darkAlt` | `#161B22` | Card backgrounds |

### CSS Utility Classes

| Class | Purpose |
|-------|---------|
| `.gradient-hero` | Dark gradient for hero sections |
| `.gradient-dark` | Dark gradient for content sections |
| `.gradient-primary` | Primary color gradient |
| `.gradient-cta` | CTA section gradient |
| `.gradient-text` | Gradient text effect |
| `.card-dark` | Dark card with backdrop blur |
| `.card-light` | White card with shadow |
| `.card-hover` | Hover lift + glow effect |

### Animation Pattern

| Type | Config |
|------|--------|
| Entry | `opacity: 0→1, y: 30→0, duration: 0.6s` |
| Stagger | `delay: index × 0.1s` |
| Hover | `translateY(-4px) + box-shadow glow` |

---

## Getting Started

### Prerequisites
- Node.js 18+
- Yarn

### Install & Run

```bash
git clone https://github.com/git-bonda108/Amplit-AI-Portal.git
cd Amplit-AI-Portal
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
yarn build
yarn start
```

---

## Pages & Routes

| Route | Page | Key Components |
|-------|------|---------------|
| `/` | Home | HeroSection, CoreCapabilities, ProductsSection, KeyFeatures, CTASection |
| `/acucogn-scribe` | AcuCogn Scribe | AcucognHero, AcucognFeatures, AcucognBenefits, ProductCTA |
| `/dentsi` | Dentsi | DentsiHero, DentsiFeatures, DentsiBenefits, ProductCTA |
| `/about` | About | AboutHero, AboutMission, AboutValues, AboutCTA |
| `/contact` | Contact | ContactHero, ContactForm, ContactInfo |

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Handles contact form submissions via Prisma |

---

## 📧 Contact

- **Email**: info@acucogn.com
- **Phone**: +1 (516) 957-8453
- **Address**: 5717 Legacy Dr Suite 250, Plano, TX 75024
- **Demo**: [Book on Calendly](https://calendly.com/acucogn-sales/acucogn)

---

*Built with ❤️ by Amplit AI — Following the Arina AI Design System*


      <motion.div
            variants={itemVariants}
            className="lg:col-span-5 lg:sticky lg:top-24 mt-4 lg:mt-0"
          >
            <div className="relative group">
              {/* Card Glow Effect */}

              <div className="relative rounded-4xl sm:rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-brand/12 p-6 sm:p-8 md:p-10">

                <div
                  className="absolute inset-0 pointer-events-none bg-ambient-glow"
                />
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-black/60">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />
                  <span className="font-semibold uppercase tracking-widest text-[10px] sm:text-xs">Based in Dallas, Texas</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">What Sets Us Apart</h3>
                <p className="text-black/60 mb-6 sm:mb-8 text-base sm:text-lg">
                  Unlike generic call systems, Amplit AI understands dental workflows:
                </p>

                <ul className="space-y-4 sm:space-y-5">
                  {[
                    'Knows dental procedures & patient queries',
                    'Handles insurance-related questions',
                    'Customizable for your clinic operations',
                    'Designed with healthcare privacy in mind',
                  ].map((item) => (
                    <li key={item} className="flex items-start text-black/60 font-medium group">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand mr-3 shrink-0" />
                      <span className="text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100">
                  <div className="flex items-center p-3 sm:p-4 bg-brand/5 rounded-xl border border-brand/10 transition-colors hover:bg-brand/10">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-brand mr-3 shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-black">Enterprise Security</p>
                      <p className="text-[10px] sm:text-xs text-brand font-semibold uppercase tracking-wider mt-0.5 sm:mt-0">HIPAA Compliant • Encrypted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>