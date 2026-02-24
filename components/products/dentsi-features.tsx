'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Calendar, MessageSquare, BarChart3, Clock, UserCheck } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: '24/7 Call Handling',
    description: 'Never miss a call again. Dentsi answers every call, day or night, weekends and holidays.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Voice AI',
    description: 'Powered by ElevenLabs, Dentsi sounds natural and human, creating a great patient experience.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Intelligently books appointments based on availability, preferences, and practice rules.',
  },
  {
    icon: UserCheck,
    title: 'Confirmations & Reminders',
    description: 'Automatically confirms appointments and sends reminders to reduce no-shows.',
  },
  {
    icon: Clock,
    title: 'Cancellation Handling',
    description: 'Handles cancellations gracefully and automatically fills open slots.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Dashboard',
    description: 'Track call volumes, bookings, and performance with detailed analytics.',
  },
];

export default function DentsiFeatures() {
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
            Your 24/7 Virtual Receptionist
          </h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto">
            Dentsi transforms how dental practices handle patient communications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(features ?? []).map((feature, index) => {
            const Icon = feature?.icon ?? Phone;
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
