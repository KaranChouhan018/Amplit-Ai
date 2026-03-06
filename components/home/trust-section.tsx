'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PARTNER_LOGOS = [
  {
    name: 'Appointment',
    logo: '/trust-image/multi.png',
  },
  {
    name: 'Call',
    logo: '/trust-image/call.png',
  },
  {
    name: 'Book',
    logo: '/trust-image/Book.png',
  },
  {
    name: 'Patient ',
    logo: '/trust-image/patient.png',
  },

];

// Duplicate for seamless vertical loop
const MARQUEE_ITEMS = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

export default function TrustSection() {
  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Card */}
        <div
          className="flex flex-col xl:flex-row bg-white rounded-3xl p-5 sm:p-7 lg:p-8 items-stretch gap-6 lg:gap-8 border border-brand/60"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.03)' }}
        >

          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="shrink-0 flex flex-col justify-center w-full xl:w-[42%]"
          >
            {/* Brand accent bar */}
            <div className="w-10 h-1 rounded-full bg-brand mb-5" />

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
              Is your dental front desk{' '}
              <br className="hidden sm:block" />
              overwhelmed with calls, scheduling, and daily tasks?
            </h3>

            <p className="text-[15px] md:text-[17px] text-[#4e5157] font-medium leading-relaxed max-w-md">
              With Amplit AI, every call is answered, every appointment is managed, and your practice stays supported around the clock.
            </p>
          </motion.div>
          <div
            className="flex-1 relative overflow-hidden flex items-center"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
          >
            <motion.div
              className="flex gap-10 sm:gap-5 shrink-0"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {MARQUEE_ITEMS.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="group relative overflow-hidden rounded-2xl bg-brand-bg1 border border-brand/10 flex items-center justify-center cursor-default shrink-0 w-56 h-40 sm:w-72 sm:h-48"
                  style={{ boxShadow: '0 2px 8px rgba(101,148,177,0.08)' }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-contain grayscale-100 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.05]"
                  />

                  {/* Label chip on hover */}
                  <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-brand bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-lg opacity-100 transition-opacity duration-300 z-20">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
