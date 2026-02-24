'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Reduce documentation burden by 70%',
  'Improve clinical note accuracy',
  'Enhance patient-provider interaction',
  'Seamless EHR integration',
];

export default function AcuCognBenefits() {
  return (
    <section className="bg-[#F6F8FA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
              Focus on <span className="gradient-text">Patients</span>
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#6594B1] flex-shrink-0" />
                  <span className="text-[#4A4A4A]">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="text-6xl font-bold gradient-text mb-2">70%</div>
            <p className="text-[#4A4A4A]">Reduction in documentation time</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
