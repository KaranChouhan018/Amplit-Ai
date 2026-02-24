'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function AboutCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#F9F9F9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-[#6B6B6B] mb-6">
            <MapPin className="w-5 h-5" />
            <span>{CONTACT_INFO?.address ?? ''}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto mb-8">
            Join healthcare practices across the country that are leveraging AI to deliver better patient care while running more efficient operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#6594B1]/25"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/acucogn-scribe"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4A4A4A] rounded-lg font-semibold border border-gray-200 hover:border-[#6594B1] hover:text-[#6594B1] transition-all"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
