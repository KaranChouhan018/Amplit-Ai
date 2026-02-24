'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FileText, Phone, Users, Clock } from 'lucide-react';

const products = [
  {
    badge: 'Clinical AI',
    title: 'AcuCogn Scribe',
    subtitle: 'Ambient AI Clinical Documentation',
    description: 'Real-time visit-to-note documentation that captures clinical conversations. HIPAA compliant with on-premises deployment options.',
    href: '/acucogn-scribe',
    icon: FileText,
    illustration: (
      <div className="relative w-full h-48 bg-[#F6F8FA] rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Document illustration */}
          <div className="relative">
            <div className="w-32 h-40 bg-white rounded-lg shadow-lg border border-gray-200 p-3">
              <div className="w-full h-2 bg-[#6594B1]/20 rounded mb-2" />
              <div className="w-3/4 h-2 bg-[#6594B1]/20 rounded mb-2" />
              <div className="w-5/6 h-2 bg-[#6594B1]/20 rounded mb-4" />
              <div className="w-full h-2 bg-[#6594B1]/10 rounded mb-2" />
              <div className="w-2/3 h-2 bg-[#6594B1]/10 rounded" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#6594B1] rounded-full flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    badge: 'Voice AI',
    title: 'Dentsi',
    subtitle: 'AI Voice Agent for Dental Practices',
    description: '24/7 automated call handling with natural voice powered by ElevenLabs. Intelligent appointment booking and real-time dashboard.',
    href: '/dentsi',
    icon: Phone,
    illustration: (
      <div className="relative w-full h-48 bg-[#F6F8FA] rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Phone/Voice illustration */}
          <div className="relative">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#6594B1] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-[#6594B1] rounded-full"
                    animate={{ height: [8, 24, 8] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
              <div className="w-12 h-12 bg-[#6594B1]/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#6594B1]" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4 text-[#6594B1]" />
              <span className="text-xs text-[#6B6B6B]">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#F6F8FA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6594B1] font-medium mb-4">Our Products</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Healthcare AI{' '}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
            Purpose-built AI tools that transform how healthcare practices operate, 
            from clinical documentation to patient communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-light rounded-2xl overflow-hidden card-hover transition-all duration-300"
            >
              {/* Illustration */}
              {product.illustration}

              {/* Content */}
              <div className="p-8">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#6594B1] bg-[#6594B1]/10 rounded-full mb-4">
                  {product.badge}
                </span>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                  {product.title}
                </h3>
                <p className="text-[#6594B1] font-medium mb-4">{product.subtitle}</p>
                <p className="text-[#4A4A4A] mb-6">{product.description}</p>
                <Link
                  href={product.href}
                  className="inline-flex items-center text-[#6594B1] font-medium hover:text-[#4A7A99] transition-colors group"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
