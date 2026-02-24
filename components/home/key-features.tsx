'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Puzzle, Shield, Cpu, Target, Scaling, Zap } from 'lucide-react';

const features = [
  {
    icon: Puzzle,
    title: 'Plug-&-Play Integrations',
    description: 'Seamlessly connect with existing systems to accelerate innovation and unlock new capabilities.',
  },
  {
    icon: Shield,
    title: 'Centralized & Secure AI',
    description: 'Leverage secure AI solutions to deploy with confidence, protecting sensitive healthcare data.',
  },
  {
    icon: Cpu,
    title: 'Proprietary AI Models',
    description: 'Develop proprietary models based on your practice\'s unique intelligence and workflows.',
  },
  {
    icon: Target,
    title: 'Precision & Security',
    description: 'Enterprise-grade precision with complete data privacy and HIPAA compliance.',
  },
  {
    icon: Scaling,
    title: 'Infinite Scalability',
    description: 'Effortlessly scale to meet evolving business demands, from single practice to enterprise growth.',
  },
  {
    icon: Zap,
    title: '24/7 Availability',
    description: 'Always-on AI that never sleeps, ensuring no missed calls or opportunities around the clock.',
  },
];

export default function KeyFeatures() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6594B1] font-medium mb-4">• • •</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
            Key Platform
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Features
          </h2>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
            Domain-specific solutions and proprietary models, ensuring complete privacy 
            and compliance adherence for your healthcare business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-light rounded-2xl p-6 card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#6594B1]/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#6594B1]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#6B6B6B]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
