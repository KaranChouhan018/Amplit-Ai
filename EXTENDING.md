# Extending the Website

Guide for creating new components and pages in line with the Arina.ai design style.

---

## Creating a New Page

### 1. Create the Page File

```tsx
// app/new-page/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function NewPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  return (
    <>
      {/* Hero Section - Always dark gradient */}
      <section className="relative gradient-hero pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#6594B1]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Page{' '}
              <span className="gradient-text">Title</span>
            </h1>
            <p className="text-xl text-[#8B949E]">
              Page description goes here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Light background */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Content */}
        </div>
      </section>

      {/* CTA Section - Gradient */}
      <section className="gradient-cta py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Call to Action
          </h2>
          <Link
            href={CONTACT_INFO.calendly}
            target="_blank"
            className="inline-flex items-center px-8 py-4 bg-white text-[#6594B1] font-semibold rounded-lg hover:bg-gray-100 transition-all group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
```

### 2. Add to Navigation

Update `lib/constants.ts`:

```typescript
export const NAV_LINKS = [
  // ... existing links
  { label: 'New Page', href: '/new-page' },
];
```

---

## Creating a Feature Card Grid

```tsx
const features = [
  {
    icon: IconName,
    title: 'Feature Title',
    description: 'Feature description text.',
  },
  // ... more features
];

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((feature, index) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-light rounded-2xl p-6 card-hover transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-[#6594B1]/10 flex items-center justify-center mb-4">
        <feature.icon className="w-6 h-6 text-[#6594B1]" />
      </div>
      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-[#6B6B6B]">
        {feature.description}
      </p>
    </motion.div>
  ))}
</div>
```

---

## Creating a Stats Section

```tsx
const stats = [
  { value: '100%', label: 'Accuracy' },
  { value: '24/7', label: 'Availability' },
  { value: '50+', label: 'Integrations' },
];

<div className="grid grid-cols-3 gap-8">
  {stats.map((stat, index) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {stat.value}
      </div>
      <p className="text-[#6B6B6B]">{stat.label}</p>
    </motion.div>
  ))}
</div>
```

---

## Creating a Two-Column Layout

```tsx
<div className="grid lg:grid-cols-2 gap-16 items-center">
  {/* Left Column - Content */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
      Section{' '}
      <span className="gradient-text">Title</span>
    </h2>
    <p className="text-[#4A4A4A] text-lg mb-8">
      Description text goes here.
    </p>
  </motion.div>

  {/* Right Column - Visual */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    {/* Image or card */}
  </motion.div>
</div>
```

---

## Adding a New Product Page

1. Create `app/[product-name]/page.tsx`
2. Follow the structure of `acucogn-scribe` or `dentsi` pages
3. Include:
   - Hero section with product badge
   - Features grid
   - Benefits/stats section
   - Quote or testimonial
   - CTA section

---

## Icon Usage

Import from `lucide-react`:

```tsx
import {
  // Common icons used
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Shield,
  Brain,
  FileText,
  Clock,
  Users,
  Zap,
  // Add more as needed
} from 'lucide-react';
```

Browse all icons: [lucide.dev/icons](https://lucide.dev/icons)

---

## Potential New Components

Ideas for extending the website:

1. **Testimonials Carousel** - Customer quotes with photos
2. **Pricing Cards** - Tiered pricing display
3. **FAQ Accordion** - Expandable questions
4. **Blog List** - Article cards with images
5. **Team Grid** - Team member profiles
6. **Integration Logos** - Partner/integration showcase
7. **Timeline** - Company history or process steps
8. **Comparison Table** - Feature comparison between products
