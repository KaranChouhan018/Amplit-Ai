'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight } from 'lucide-react';

interface ProductCTAProps {
  productName?: string;
}

export default function ProductCTA({ productName = 'our product' }: ProductCTAProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience {productName ?? 'Our Product'}?
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Book a personalized demo and see how {productName ?? 'our solution'} can transform your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#6594B1] rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-xl"
            >
              <Calendar size={20} />
              Book a Demo
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              Learn About Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
