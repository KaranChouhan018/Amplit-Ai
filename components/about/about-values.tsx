'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield, BrainCircuit, CalendarCheck,
  PhoneCall, HeartPulse, Clock
} from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: "Deep Dental Knowledge",
    description: "Trained specifically on dental procedures, terminology, and common patient queries."
  },
  {
    icon: CalendarCheck,
    title: "More Appointments",
    description: "Convert more calls into bookings automatically with intelligent scheduling and real-time calendar sync."
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security with end-to-end encryption ensuring complete patient data privacy."
  },
  {
    icon: PhoneCall,
    title: "Natural Voice AI",
    description: "Human-like conversational AI that patients feel comfortable speaking with."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call. Our AI works around the clock, covering nights, weekends, and holidays."
  },
  {
    icon: HeartPulse,
    title: "Intelligent Escalation",
    description: "Automatically detects urgent medical or dental emergencies and escalates to on-call staff."
  },
];

export default function AboutFeatures() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-10 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Our Core Values
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#4e5157] font-medium leading-relaxed">
            The principles that guide our innovation, service, and commitment to dental and healthcare excellence.
          </p>
        </motion.div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.1 + i * 0.08, ease: "easeOut" }}
              className="bg-white relative overflow-hidden p-8 rounded-3xl border border-brand shadow-md flex flex-col items-start gap-5  transition-colors duration-300 group"
            >
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-brand/10 to-transparent pointer-events-none" />

              <div className="relative z-10 w-12 h-12 rounded-xl bg-black/3 border border-black/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-brand" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[15px] md:text-[17px] text-[#4e5157] font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
