'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ContactDialog } from '@/components/contact-dialog';
import { CONTACT_INFO } from '@/lib/constants';
import { BorderBeam } from '../ui/border-beam';

export default function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Generate vertical stripe positions
  const stripes = Array.from({ length: 18 }, (_, i) => i);

  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-4xl px-6 bg-white border border-brand/60 sm:px-12 py-10  md:py-14"
        >

          <BorderBeam
            duration={10}
            size={300}
            colorFrom="#6594B1"
            colorTo="#a8c8de"
            borderWidth={2}
          />
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none bg-ambient-glow"
          />

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              Meet Your 24/7 AI Front Desk Assistant - <span className='text-brand'>Dentsi</span>
            </h2>
            <p className="text-[#4e5157] font-medium text-[15px] md:text-[17px] mb-8 sm:mb-10 leading-relaxed">
              Dentsi answers every call instantly, understands patient needs, and books appointments — just like a trained front desk staff member. Start capturing every opportunity today.
            </p>
            <Link
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-4 md:ml-4 gap-2 px-7 py-3.5 bg-brand text-white rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book a Demo
            </Link>


            <ContactDialog>
              <button
                className="inline-flex items-center justify-center mt-4 md:ml-4 gap-2 px-7 py-3.5 bg-transparent border border-brand/10 text-[#4e5157] font-medium text-sm rounded-full hover:bg-black/5 hover:text-gray-900 transition-all group whitespace-nowrap"
              >
                Enquire Now
                <ArrowRight size={20} />
              </button>
            </ContactDialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
