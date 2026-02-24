'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, User, Mail, Building, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response?.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target ?? {};
    setFormData((prev) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center justify-center min-h-[400px]"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Thank You!</h3>
        <p className="text-[#6B6B6B] text-center max-w-sm">
          We&apos;ve received your message and will get back to you shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-[#6594B1] font-medium hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#4A4A4A] mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B]" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData?.name ?? ''}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#6594B1] focus:ring-2 focus:ring-[#6594B1]/20 outline-none transition-all text-[#1A1A1A]"
              placeholder="John Smith"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A] mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B]" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData?.email ?? ''}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#6594B1] focus:ring-2 focus:ring-[#6594B1]/20 outline-none transition-all text-[#1A1A1A]"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#4A4A4A] mb-2">
            Practice/Company Name
          </label>
          <div className="relative">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B]" />
            <input
              type="text"
              id="company"
              name="company"
              value={formData?.company ?? ''}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#6594B1] focus:ring-2 focus:ring-[#6594B1]/20 outline-none transition-all text-[#1A1A1A]"
              placeholder="Your Practice Name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#4A4A4A] mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#6B6B6B]" />
            <textarea
              id="message"
              name="message"
              value={formData?.message ?? ''}
              onChange={handleChange}
              required
              rows={4}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#6594B1] focus:ring-2 focus:ring-[#6594B1]/20 outline-none transition-all text-[#1A1A1A] resize-none"
              placeholder="Tell us about your practice and how we can help..."
            />
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 gradient-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#6594B1]/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
