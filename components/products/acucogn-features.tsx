'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic, FileText, Shield, Server, Brain, Clock } from 'lucide-react';
import { IMAGES } from '@/lib/constants';

const features = [
  {
    icon: Mic,
    title: 'Ambient Capture',
    description: 'Silently captures clinical conversations without interrupting the natural flow of patient encounters.',
  },
  {
    icon: Brain,
    title: 'AI Understanding',
    description: 'Advanced NLP understands medical terminology, context, and clinical nuances accurately.',
  },
  {
    icon: FileText,
    title: 'Instant Notes',
    description: 'Generates structured clinical notes in real-time, ready for review and EHR integration.',
  },
  {
    icon: Server,
    title: 'On-Premises Deploy',
    description: 'Full control with on-premises or private cloud deployment options for your data.',
  },
  {
    icon: Shield,
    title: 'HIPAA Ready',
    description: 'Built from the ground up with healthcare-grade security and full HIPAA compliance.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Reduce documentation time by up to 70%, giving clinicians more time with patients.',
  },
];

export default function AcuCognFeatures() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#6594B1]/10 text-[#6594B1] text-sm font-medium mb-4">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Documentation That Works for You
          </h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto">
            AcuCogn Scribe transforms how clinicians document patient encounters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(features ?? []).map((feature, index) => {
            const Icon = feature?.icon ?? FileText;
            return (
              <motion.div
                key={feature?.title ?? index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{feature?.title ?? ''}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{feature?.description ?? ''}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
