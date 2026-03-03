'use client';

import { motion } from 'framer-motion';

const PARTNER_LOGOS = [
  {
    name: 'Modern Family Dental Care',
    logo: '/hero-v3.png',
  },
  {
    name: 'SAMA',
    logo: '/hero-v1.jpg',
  },
  {
    name: 'All Star Pediatric Dentistry',
    logo: '/hero-v1.jpg',
  },
  {
    name: 'DentalXcare',
    logo: '/hero-v1.jpg',
  },
];

export default function TrustSection() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="relative w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">

        {/* Main Flex Container */}
        <div className="flex flex-col xl:flex-row bg-white rounded-4xl p-3 sm:p-4 items-stretch gap-3 lg:gap-4 h-auto xl:h-37.5">


          {/* Left: Trust Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0 flex flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 xl:px-8 rounded-xl sm:rounded-[20px] w-full xl:w-[45%]"
          >
            <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 tracking-wide uppercase mb-2 sm:mb-3">
              Is your dental front desk <br className="hidden sm:block" /> overwhelmed with calls, scheduling, and daily tasks?
            </h3>
            <p className="text-sm sm:text-[15px] text-[#5A6475] leading-relaxed">
              With Amplit AI, every call is answered, every appointment is managed, and your practice stays supported around the clock.
            </p>
          </motion.div>

          {/* Center: Partner Logos with Marquee */}
          <div className="relative flex-1 overflow-hidden h-24 sm:h-full min-h-20 sm:min-h-25">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Marquee container */}
            <motion.div
              className="flex items-center h-full"
              animate={{ x: [0, '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedLogos.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="w-24 sm:w-30 xl:w-36.25 shrink-0 flex bg-brand-bg1 items-center justify-center p-4 sm:p-6  rounded-xl sm:rounded-[20px] mx-1.5 sm:mx-2"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-auto max-h-10 sm:max-h-15 object-contain opacity-80 mix-blend-multiply"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
