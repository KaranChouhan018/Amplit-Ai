'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Zap, Users } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Care First', description: 'Patient care at the core.' },
  { icon: Shield, title: 'Trust', description: 'HIPAA compliant security.' },
  { icon: Zap, title: 'Innovation', description: 'Cutting-edge AI.' },
  { icon: Users, title: 'Partnership', description: 'Your success is our mission.' },
];

export default function AboutValues() {
  return (
    <section className="bg-[#F6F8FA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-light rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#6594B1]/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-[#6594B1]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{value.title}</h3>
              <p className="text-sm text-[#6B6B6B]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
