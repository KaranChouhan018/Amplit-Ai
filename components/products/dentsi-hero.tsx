'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function DentsiHero() {
  return (
    <section className="relative gradient-hero pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-[#6594B1] bg-[#6594B1]/10 rounded-full mb-6">
            Voice AI
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Dentsi</span>
          </h1>
          <p className="text-xl text-[#8B949E] mb-10">
            AI Voice Agent for Dental Practices
          </p>
          <Link
            href={CONTACT_INFO.calendly}
            target="_blank"
            className="inline-flex items-center px-8 py-4 bg-[#6594B1] text-white font-semibold rounded-lg hover:bg-[#4A7A99] transition-all group"
          >
            Request Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
