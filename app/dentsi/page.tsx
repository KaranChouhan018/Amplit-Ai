'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, Phone, Clock, Calendar, BarChart3, Mic2, Users, CheckCircle, Headphones } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const features = [
  {
    icon: Phone,
    title: '24/7 Call Handling',
    description: 'Never miss a patient call again. Dentsi answers every call, day or night, weekends and holidays.',
  },
  {
    icon: Mic2,
    title: 'Natural Voice AI',
    description: 'Powered by ElevenLabs, Dentsi sounds natural and professional, creating a great patient experience.',
  },
  {
    icon: Calendar,
    title: 'Intelligent Booking',
    description: 'Automatically schedules, reschedules, and confirms appointments based on your practice\'s availability.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Dashboard',
    description: 'Monitor calls, appointments, and patient interactions with comprehensive analytics.',
  },
  {
    icon: Users,
    title: 'Patient Communication',
    description: 'Handles routine inquiries, appointment reminders, and follow-up calls automatically.',
  },
  {
    icon: Headphones,
    title: 'Seamless Handoff',
    description: 'Intelligently transfers complex calls to your team when human touch is needed.',
  },
];

const stats = [
  { value: '100%', label: 'Calls Answered' },
  { value: '24/7', label: 'Availability' },
  { value: '3x', label: 'More Bookings' },
  { value: '0', label: 'Missed Opportunities' },
];

export default function DentsiPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-hero pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#6594B1]/10 rounded-full blur-3xl" />
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
              Voice AI
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Dentsi</span>
            </h1>
            <p className="text-xl text-[#8B949E] mb-4">
              AI Voice Agent for Dental Practices
            </p>
            <p className="text-[#6B6B6B] text-lg mb-10 max-w-2xl">
              Your always-on receptionist that never takes a break. Dentsi handles 
              every call with natural conversation, books appointments, and keeps 
              your schedule tight — 24/7/365.
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

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-[#6B6B6B]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F6F8FA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Everything Your{' '}
              <span className="gradient-text">Front Desk</span>{' '}
              Needs
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Dentsi doesn\'t replace your front desk — it sets them free to focus on 
              in-person patient interactions that actually matter.
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

      {/* Quote Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl md:text-3xl text-[#1A1A1A] font-light leading-relaxed mb-8">
              &ldquo;Patients don\'t remember your hold music. They remember how you made them feel.&rdquo;
            </p>
            <p className="text-[#6594B1] font-medium">
              AI handles the grind. Your team handles the moments that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-cta py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Never Miss a Call Again?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Join dental practices that are capturing every opportunity with Dentsi.
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
