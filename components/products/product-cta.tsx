'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight } from 'lucide-react';
import { BorderBeam } from '@/components/ui/border-beam';
import { ContactDialog } from '@/components/contact-dialog';
import { CONTACT_INFO } from '@/lib/constants';
interface ProductCTAProps {
  productName?: string;
}

export default function ProductCTA({ productName = 'our product' }: ProductCTAProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const stripes = Array.from({ length: 18 }, (_, i) => i);

  return (
    <section className=" py-10 ">
      <div className="max-w-7xl mx-auto px-6">


        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-4xl px-6 bg-white border border-black/5 sm:px-12 py-10 sm:py-10 md:py-14"
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
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-4  gap-2 px-7 py-3.5 bg-brand text-white rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book a Demo
            </Link>
              <ContactDialog>
                 <button
                className="inline-flex items-center justify-center mt-4 md:ml-4 gap-2 px-7 py-3.5 bg-transparent border border-black/5 text-black/70 font-medium text-sm rounded-full hover:bg-black/5 hover:text-black transition-all group whitespace-nowrap"
              >
                Enquire Now
                <ArrowRight size={20} />
              </button>
              </ContactDialog>
             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

