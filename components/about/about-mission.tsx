'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Users } from 'lucide-react';
import { IMAGES } from '@/lib/constants';

const sections = [
  {
    icon: Eye,
    title: 'Our Vision',
    content: 'A world where every clinic runs like a well-oiled machine — AI doing the heavy lifting behind the scenes, so healthcare professionals can focus entirely on patient care.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    content: 'We take the chaos off your front desk — missed calls, scheduling headaches, repetitive tasks — all handled automatically. So your front desk can stop drowning in tasks and start doing what they do best: patient interaction that actually matters.',
  },
  {
    icon: Users,
    title: 'Who We Are',
    content: 'A dedicated team building AI that answers every call, books every appointment, handles routine tasks, and keeps your schedule airtight 24/7/365. Healthcare-grade security, HIPAA-ready, built for practices that demand excellence.',
  },
];

export default function AboutMission() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#F9F9F9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            AI Handles the Grind. Your Team Handles the Moments That Matter.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {(sections ?? []).map((section, index) => {
            const Icon = section?.icon ?? Target;
            return (
              <motion.div
                key={section?.title ?? index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{section?.title ?? ''}</h3>
                <p className="text-[#6B6B6B] leading-relaxed">{section?.content ?? ''}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
