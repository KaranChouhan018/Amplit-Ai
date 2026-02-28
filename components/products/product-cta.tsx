'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';

interface ProductCTAProps {
  productName?: string;
}

export default function ProductCTA({ productName = 'our product' }: ProductCTAProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const stripes = Array.from({ length: 18 }, (_, i) => i);

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">


        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl px-8 sm:px-12 py-10 md:py-14"
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none bg-ambient-glow"
          />
          
          <BorderBeam size={100} duration={10} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={1} />
        
          {/* Vertical stripes decoration on the right */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 flex items-stretch justify-end gap-[6px] pr-2 opacity-20">
            {stripes.map((i) => (
              <div
                key={i}
                className="w-[18px] rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  transform: `scaleY(${0.55 + Math.sin(i * 0.6) * 0.45})`,
                  transformOrigin: 'center',
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
              Ready to Experience {productName}?
            </h2>
            <p className="text-black/60 text-base md:text-lg mb-10 leading-relaxed">
              Book a personalized demo and see how {productName} can transform your practice. Limitless possibilities await at every click and command.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand text-white font-semibold rounded-full hover:bg-brand-dark transition-all"
              >
                <Calendar size={18} />
                Book a Demo
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-black/70 font-semibold rounded-full border border-black/15 hover:border-brand/40 hover:text-black transition-all"
              >
                Learn About Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

