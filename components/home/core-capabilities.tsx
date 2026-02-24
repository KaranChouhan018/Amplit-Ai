'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Shield, BarChart3, Zap, Database, Users } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'Data Intelligence & Analysis',
    description: 'Understand, interact with, and protect your data dynamically',
    features: ['Clinical Data Analysis', 'Visual Data Extraction', 'Automated Documentation'],
  },
  {
    icon: Users,
    title: 'Adaptive User Interaction',
    description: 'Make business processes conversational, real-time, and contextual',
    features: ['Natural Voice Agents', 'Dynamic Patient Conversations', 'Automation Triggers'],
  },
];

export default function CoreCapabilities() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Core AI{' '}
            <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-[#4A4A4A] text-lg max-w-2xl">
            Build smarter, faster: Core intelligent agents designed to accelerate 
            complex automations and workflows — boosting delivery speed and simplifying 
            AI adoption in healthcare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-light rounded-2xl p-8 card-hover transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#6594B1]/10 flex items-center justify-center">
                  <cap.icon className="w-6 h-6 text-[#6594B1]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A]">{cap.title}</h3>
              </div>
              <p className="text-[#4A4A4A] mb-6">{cap.description}</p>
              <ul className="space-y-2">
                {cap.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-[#6B6B6B]">
                    <span className="w-1.5 h-1.5 bg-[#6594B1] rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-right"
        >
          <Link
            href="/about"
            className="inline-flex items-center text-[#6594B1] font-medium hover:text-[#4A7A99] transition-colors group"
          >
            Explore
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
