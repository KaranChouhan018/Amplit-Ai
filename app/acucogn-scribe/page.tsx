'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, FileText, Brain, Shield, Clock, Mic, Cloud, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const features = [
  {
    icon: Mic,
    title: 'Ambient Capture',
    description: 'Automatically captures clinical conversations without disrupting the natural flow of patient visits.',
  },
  {
    icon: Brain,
    title: 'AI Understanding',
    description: 'Advanced NLP models understand medical terminology, context, and clinical workflows.',
  },
  {
    icon: FileText,
    title: 'Real-time Documentation',
    description: 'Generates structured clinical notes in real-time as the conversation unfolds.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security with full HIPAA compliance and data encryption.',
  },
  {
    icon: Cloud,
    title: 'Flexible Deployment',
    description: 'Choose between on-premises or private cloud deployment based on your needs.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Reduce documentation time by up to 70%, giving clinicians more time with patients.',
  },
];

const benefits = [
  'Reduce documentation burden by 70%',
  'Improve clinical note accuracy',
  'Enhance patient-provider interaction',
  'Seamless EHR integration',
  'Support for multiple specialties',
  'Customizable templates',
];

export default function AcuCognScribePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-hero pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#6594B1]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-[#6594B1] bg-[#6594B1]/10 rounded-full mb-6">
              Clinical AI
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AcuCogn{' '}
              <span className="gradient-text">Scribe</span>
            </h1>
            <p className="text-xl text-[#8B949E] mb-4">
              Ambient AI Clinical Documentation
            </p>
            <p className="text-[#6B6B6B] text-lg mb-10 max-w-2xl">
              Transform clinical conversations into structured, accurate documentation 
              in real-time. Let AI handle the paperwork while you focus on patient care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={CONTACT_INFO.calendly}
                target="_blank"
                className="inline-flex items-center px-8 py-4 bg-[#6594B1] text-white font-semibold rounded-lg hover:bg-[#4A7A99] transition-all hover:shadow-lg hover:shadow-[#6594B1]/30 group"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-[#30363d] text-[#8B949E] font-semibold rounded-lg hover:border-[#6594B1] hover:text-[#6594B1] transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Powerful{' '}
              <span className="gradient-text">Features</span>
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Built for the modern healthcare practice, AcuCogn Scribe combines 
              cutting-edge AI with intuitive design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
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

      {/* Benefits Section */}
      <section className="bg-[#F6F8FA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={benefitsRef}
              initial={{ opacity: 0, x: -30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Focus on{' '}
                <span className="gradient-text">Patients</span>
              </h2>
              <p className="text-[#4A4A4A] text-lg mb-8">
                With AcuCogn Scribe handling documentation, clinicians can spend more 
                time where it matters most — with their patients.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#6594B1] flex-shrink-0" />
                    <span className="text-[#4A4A4A]">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-2">70%</div>
                  <p className="text-[#4A4A4A]">Reduction in documentation time</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#F6F8FA] rounded-xl">
                    <div className="text-2xl font-bold text-[#1A1A1A]">99%</div>
                    <p className="text-sm text-[#6B6B6B]">Accuracy rate</p>
                  </div>
                  <div className="text-center p-4 bg-[#F6F8FA] rounded-xl">
                    <div className="text-2xl font-bold text-[#1A1A1A]">24/7</div>
                    <p className="text-sm text-[#6B6B6B]">Available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-cta py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Documentation?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Join healthcare providers who are already saving hours every day with AcuCogn Scribe.
          </p>
          <Link
            href={CONTACT_INFO.calendly}
            target="_blank"
            className="inline-flex items-center px-8 py-4 bg-white text-[#6594B1] font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg group"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
