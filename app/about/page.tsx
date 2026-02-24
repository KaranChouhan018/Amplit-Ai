'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, Heart, Target, Users, Shield, Zap, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const values = [
  {
    icon: Heart,
    title: 'Care First',
    description: 'Every feature, every line of code is designed with patient care at its core.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Healthcare-grade security and HIPAA compliance in everything we build.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Pushing the boundaries of what\'s possible with AI in healthcare.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We succeed when our clients succeed. Your growth is our mission.',
  },
];

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Care First.{' '}
              <span className="gradient-text">Intelligence Always.</span>
            </h1>
            <p className="text-xl text-[#8B949E] mb-10 max-w-2xl">
              We envision a world where every clinic runs like a well-oiled machine — 
              AI doing the heavy lifting behind the scenes, so healthcare providers 
              can focus on what they do best: caring for patients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Our{' '}
                <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-[#4A4A4A] mb-6 leading-relaxed">
                We take the chaos off your front desk. Missed calls, scheduling headaches, 
                repetitive tasks — all handled automatically.
              </p>
              <p className="text-lg text-[#4A4A4A] mb-8 leading-relaxed">
                So your front desk can stop drowning in tasks and start doing what they 
                do best — patient interaction that actually matters.
              </p>
              <div className="p-6 bg-[#F6F8FA] rounded-2xl border-l-4 border-[#6594B1]">
                <p className="text-[#1A1A1A] font-medium italic">
                  &ldquo;We don\'t replace your front desk. We set them free.&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[#0D1117] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Who We Are</h3>
                <p className="text-[#8B949E] mb-6">
                  We\'re a healthcare AI company based in Plano, Texas. We build AI that:
                </p>
                <ul className="space-y-4">
                  {[
                    'Answers every call',
                    'Books every appointment',
                    'Handles routine tasks',
                    'Keeps your schedule airtight 24/7/365',
                  ].map((item) => (
                    <li key={item} className="flex items-center text-[#8B949E]">
                      <span className="w-2 h-2 bg-[#6594B1] rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-[#30363d]">
                  <div className="flex items-center text-[#6594B1]">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="font-medium">Healthcare-grade security. HIPAA-ready.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#F6F8FA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Our{' '}
              <span className="gradient-text">Values</span>
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-light rounded-2xl p-6 text-center card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6594B1]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#6594B1]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6B6B6B]">
                  {value.description}
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
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-6 h-6 text-white mr-2" />
            <span className="text-white/80">Plano, Texas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let\'s Build the Future of Healthcare Together
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Ready to see how AI can transform your practice?
          </p>
          <Link
            href={CONTACT_INFO.calendly}
            target="_blank"
            className="inline-flex items-center px-8 py-4 bg-white text-[#6594B1] font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg group"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
