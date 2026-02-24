'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="gradient-cta py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Journey With Amplit AI
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Embark on a transformation journey into the future of healthcare AI as you 
            kickstart your exploration of Amplit AI, where limitless possibilities await 
            at every click and command.
          </p>
          <Link
            href={CONTACT_INFO.calendly}
            target="_blank"
            className="inline-flex items-center px-8 py-4 bg-white text-[#6594B1] font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg group"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
