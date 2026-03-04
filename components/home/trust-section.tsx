'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PARTNER_LOGOS = [
  {
    name: 'Appointment',
    logo: '/trust-image/appointment.jpg',
  },
  {
    name: 'Call',
    logo: '/trust-image/call.jpg',
  },
  {
    name: 'Image',
    logo: '/trust-image/image.jpg',
  },
  {
    name: 'Time',
    logo: '/trust-image/time.jpg',
  },
];

export default function TrustSection() {

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
            <h3 className="text-md md:text-md font-bold text-gray-900 tracking-wide mb-2 sm:mb-3">
              Is your dental front desk <br className="hidden sm:block" /> overwhelmed with calls, scheduling, and daily tasks?
            </h3>
            <p className="text-sm sm:text-[15px] text-[#5A6475] leading-relaxed">
              With Amplit AI, every call is answered, every appointment is managed, and your practice stays supported around the clock.
            </p>
          </motion.div>

          {/* Partner Images — all fade together */}
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex-1 flex items-center justify-center overflow-hidden gap-2 sm:gap-3 p-4 flex-wrap xl:flex-nowrap"
          >
            {PARTNER_LOGOS.map((partner) => (
              <div
                key={partner.name}
                className="w-24 sm:w-30 xl:w-36.25 shrink-0 flex bg-brand-bg1 items-center justify-center rounded-xl sm:rounded-[20px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={1920}
                  height={1080}
                  className="w-full h-auto max-h-18 md:max-h-40 object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
