'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { BorderBeam } from '../ui/border-beam';

export default function AboutCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Generate vertical stripe positions
  const stripes = Array.from({ length: 18 }, (_, i) => i);

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl  px-8 sm:px-12 py-10 md:py-14"
        >
           <div
            className="absolute inset-0 pointer-events-none bg-ambient-glow"
          />

          <BorderBeam size={250} duration={12} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={1.5} />
          {/* Content */}
          <div className="relative z-10 max-w-xl">

            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
              Stop Losing Revenue to Missed Calls
            </h2>
            <p className="text-black/60 text-base md:text-lg mb-10 leading-relaxed">
              Your AI-powered dental front desk answers every call, books appointments, and works 24/7 — so you never miss revenue again. See how Amplit AI can transform your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand text-white rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
              {/* <Link
                href="/acucogn-scribe"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black/60 rounded-full font-semibold border border-gray-200 hover:border-brand hover:text-brand transition-all whitespace-nowrap"
              >
                Explore Products
              </Link> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
