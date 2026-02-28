'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Shield, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Care First',
    description: 'Every feature we build is designed with patient care at its core. We reduce operational burden so providers can focus on what matters most.',
  },
  {
    icon: Shield,
    title: 'Healthcare Privacy',
    description: 'Built with HIPAA compliance at its core. All data encrypted in transit and at rest — designed with healthcare privacy in mind.',
  },
  {
    icon: Zap,
    title: 'Seamless Efficiency',
    description: 'AI that works in the background — improving efficiency without disrupting care. No missed calls, no long waits, no manual entry.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We succeed when your practice succeeds. From onboarding to daily operations, we\'re your dedicated AI partner.',
  },
];

export default function AboutValues() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const FirstIcon = values[0].icon;

  return (
    <section className="bg-white py-10 md:py-14 relative overflow-hidden">
      {/* Radial bg tint */}
      <div
        className="absolute inset-0 pointer-events-none bg-ambient-tint"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
            Our Core Values
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            The foundation of everything
            <br className="hidden sm:block" /> we build.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Big Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="group relative overflow-hidden rounded-[28px] 
             bg-white/60 backdrop-blur-xl 
             border border-brand/12
             md:col-span-2 lg:col-span-2 lg:row-span-2 
             p-8 flex flex-col justify-between 
             min-h-[240px] lg:min-h-[360px]"
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none bg-ambient-glow"
            />
            <div
              className="w-14 h-14 rounded-2xl 
                  bg-brand/10 
                  flex items-center justify-center 
                  mb-8
                  group-hover:scale-105
                  transition duration-300"
            >
              <FirstIcon className="w-6 h-6 text-brand" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4 tracking-tight">
                {values[0].title}
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-sm">
                {values[0].description}
              </p>
            </div>
          </motion.div>

          {/* Small Cards */}
          {values.slice(1).map((f, i) => {
            const Icon = f.icon;
            const isLast = i === 2;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
                className={`group relative rounded-[24px] bg-white border border-brand/12 p-6 flex gap-4 ${isLast ? 'md:col-span-2 lg:col-span-3 flex-col sm:flex-row sm:items-center sm:p-8' : 'flex-col'}`}
              >
                <div className={`rounded-xl bg-brand/10 flex items-center justify-center shrink-0 ${isLast ? 'w-12 h-12 sm:w-16 sm:h-16' : 'w-10 h-10'}`}>
                  <Icon className={`text-brand ${isLast ? 'w-6 h-6 sm:w-8 sm:h-8' : 'w-5 h-5'}`} />
                </div>
                <div className="relative z-10">
                  <h3 className={`font-bold text-black ${isLast ? 'text-lg sm:text-xl mb-1.5 md:mb-2' : 'text-base mb-1.5'}`}>
                    {f.title}
                  </h3>
                  <p className={`text-black/60 leading-relaxed ${isLast ? 'text-sm sm:text-base max-w-2xl' : 'text-sm'}`}>
                    {f.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
