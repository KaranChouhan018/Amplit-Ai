'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { BorderBeam } from '@/components/ui/border-beam';

// Reusable Input Component for cleaner JSX
const FormInput = ({ label, id, ...props }: any) => (
  <div className="relative group">
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1 transition-colors group-focus-within:text-brand">
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-3xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all placeholder:text-gray-400"
    />
  </div>
);

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({ name: '', email: '', company: '', phone: '', interestedIn: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand/20">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #6594B1 100%)",
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex flex-col justify-center">


        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-6"
            >
              <Clock className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-semibold text-brand tracking-wide">
                Typical response: &lt; 2 hours
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6 tracking-tight">
              Let&apos;s build your <br />
              <span className="text-brand">AI Front Desk</span>
            </h1>
            <p className="text-base sm:text-lg text-black/60 max-w-2xl mx-auto leading-relaxed">
              Have questions about integrations or pricing? Our team is ready to help you automate your practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Contact Form Card */}
            <motion.div
              ref={formRef}
              className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand/5 border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Received!</h3>
                    <p className="text-gray-600 max-w-sm mx-auto mb-8">
                      We&apos;ve sent a confirmation to your email. One of our experts will reach out shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-brand font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput
                        label="Full Name"
                        id="name"
                        type="text"
                        required
                        placeholder="Dr. Sarah Johnson"
                        value={formState.name}
                        onChange={(e: any) => setFormState({ ...formState, name: e.target.value })}
                      />
                      <FormInput
                        label="Work Email"
                        id="email"
                        type="email"
                        required
                        placeholder="sarah@practice.com"
                        value={formState.email}
                        onChange={(e: any) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput
                        label="Mobile Number"
                        id="phone"
                        type="tel"
                        placeholder="write your phone number"
                        value={formState.phone}
                        onChange={(e: any) => setFormState({ ...formState, phone: e.target.value })}
                      />
                      <FormInput
                        label="Practice Name"
                        id="company"
                        type="text"
                        placeholder="Smile Dental Clinic"
                        value={formState.company}
                        onChange={(e: any) => setFormState({ ...formState, company: e.target.value })}
                      />
                    </div>

                    <div className="relative group">
                      <label htmlFor="interestedIn" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1 transition-colors group-focus-within:text-brand">
                        Interested In
                      </label>
                      <div className="relative">
                        <select
                          id="interestedIn"
                          required
                          className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-3xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all appearance-none cursor-pointer text-gray-900"
                          value={formState.interestedIn}
                          onChange={(e: any) => setFormState({ ...formState, interestedIn: e.target.value })}
                        >
                          <option value="" disabled hidden>Patient Follow-ups</option>
                          <option value="Voice AI Receptionist">Voice AI Receptionist</option>
                          <option value="Patient Follow-ups">Patient Follow-ups</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1 transition-colors group-focus-within:text-brand">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-3xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all resize-none placeholder:text-gray-400"
                        placeholder="write your message"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full py-4 bg-brand border border-black/15 text-white font-medium rounded-full hover:shadow-md hover:border-brand/40 transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-base"
                    >
                      {isSubmitting ? 'Processing...' : (
                        <>
                          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                            <Send className="w-3.5 h-3.5 text-white ml-0.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Sidebar Info */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 px-2">Contact Details</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Mail, label: 'Email us', val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                    { icon: Phone, label: 'Call us', val: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                    { icon: MapPin, label: 'Visit us', val: CONTACT_INFO.address, href: '#' },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="flex items-center gap-4 p-5 rounded-3xl bg-white/60 backdrop-blur-xl

                 border border-brand/12  group"
                    >
                      <div className="w-12 h-12 bg-white rounded-3xl flex items-center justify-center shadow-sm group-hover:bg-brand/10">
                        <item.icon className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-black">{item.label}</p>
                        <p className="text-black/80 font-medium">{item.val}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Calendly Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative p-8 rounded-3xl      bg-white/60 backdrop-blur-xl overflow-hidden group"
              >
                {/* Ambient glow */}

                <div

                  className="absolute inset-0 pointer-events-none bg-ambient-glow"

                />

                <BorderBeam size={200} duration={10} colorFrom="#6594B1" colorTo="#a8c8de" borderWidth={1.5} />

                <div className="relative z-10 w-full mb-2">
                  <div className="w-14 h-14 bg-brand/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6">
                    <Calendar className="w-7 h-7 text-brand" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black tracking-tight">Prefer a live demo?</h3>
                  <p className="text-black/80 text-sm leading-relaxed mb-8 max-w-[280px]">
                    Schedule a 15-minute discovery call to see how Amplit AI handles live dental calls in real-time.
                  </p>
                  <Link
                    href={CONTACT_INFO.calendly}
                    target="_blank"
                    className="inline-flex items-center gap-3 w-full justify-center px-6 py-4 bg-brand text-white font-bold border border-transparent rounded-full hover:shadow-lg transition-all"
                  >
                    View Calendar
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}