'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, TrendingUp, Heart, Headphones, Zap } from 'lucide-react';
import FeatureCard from '@/components/feature-card';

const valueProps = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a call or appointment. AI handles everything around the clock while your team rests.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Healthcare-grade security with full HIPAA compliance. Your patient data stays protected.',
  },
  {
    icon: TrendingUp,
    title: 'Faster Revenue',
    description: 'Reduce no-shows, fill cancellations instantly, and optimize your schedule for maximum efficiency.',
  },
  {
    icon: Heart,
    title: 'Better Patient Care',
    description: 'Patients don\'t remember your hold music. They remember how you made them feel.',
  },
  {
    icon: Headphones,
    title: 'Natural Voice AI',
    description: 'Conversational AI that sounds human. Powered by cutting-edge voice technology.',
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Get up and running quickly with seamless integration into your existing workflow.',
  },
];

export default function ValuePropsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#6594B1]/10 text-[#6594B1] text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            AI Handles the Grind. Your Team Handles the Moments That Matter.
          </h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto">
            So your front desk can stop drowning in tasks and start doing what they do best — patient interaction that actually matters.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(valueProps ?? []).map((prop, index) => (
            <FeatureCard
              key={prop?.title ?? index}
              icon={prop?.icon ?? Clock}
              title={prop?.title ?? ''}
              description={prop?.description ?? ''}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
