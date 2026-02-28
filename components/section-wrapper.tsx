'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'light' | 'alt';
  id?: string;
}

export default function SectionWrapper({
  children,
  className = '',
  bgColor = 'white',
  id,
}: SectionWrapperProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bgClasses = {
    white: 'bg-white',
    light: 'bg-[#F9F9F9]',
    alt: 'bg-[#F2F2F2]',
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`py-10 md:py-14 ${bgClasses[bgColor] ?? bgClasses.white} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
