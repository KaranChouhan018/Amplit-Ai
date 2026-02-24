'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', company: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-hero pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#6594B1]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In{' '}
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-[#8B949E]">
              Ready to transform your practice with AI? Let\'s talk about how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-[#F6F8FA] rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-[#6594B1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#6594B1]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#6B6B6B]">
                    Thank you for reaching out. We\'ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6594B1]/50 focus:border-[#6594B1] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6594B1]/50 focus:border-[#6594B1] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Company/Practice Name
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6594B1]/50 focus:border-[#6594B1] transition-all"
                      placeholder="Your Practice Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6594B1]/50 focus:border-[#6594B1] transition-all resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#6594B1] text-white font-semibold rounded-xl hover:bg-[#4A7A99] transition-all hover:shadow-lg hover:shadow-[#6594B1]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start space-x-4 p-4 bg-[#F6F8FA] rounded-xl hover:bg-[#EEF1F4] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#6594B1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#6594B1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Email</h3>
                    <p className="text-[#6594B1]">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-start space-x-4 p-4 bg-[#F6F8FA] rounded-xl hover:bg-[#EEF1F4] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#6594B1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#6594B1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Phone</h3>
                    <p className="text-[#6594B1]">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 bg-[#F6F8FA] rounded-xl">
                  <div className="w-12 h-12 bg-[#6594B1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#6594B1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Address</h3>
                    <p className="text-[#6B6B6B]">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>

              {/* Calendly CTA */}
              <div className="bg-[#0D1117] rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#6594B1]/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#6594B1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Schedule a Demo</h3>
                    <p className="text-[#8B949E] text-sm">Book a time that works for you</p>
                  </div>
                </div>
                <p className="text-[#8B949E] mb-6">
                  See Amplit AI in action. Our team will walk you through our solutions 
                  and answer any questions you have.
                </p>
                <Link
                  href={CONTACT_INFO.calendly}
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 bg-[#6594B1] text-white font-semibold rounded-lg hover:bg-[#4A7A99] transition-all hover:shadow-lg hover:shadow-[#6594B1]/30"
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
