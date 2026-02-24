'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Book a Call Card */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-[#1A1A1A]">Book a Demo</h3>
        </div>
        <p className="text-[#6B6B6B] mb-6">
          Schedule a personalized demo to see how Amplit AI can transform your practice.
        </p>
        <a
          href={CONTACT_INFO?.calendly ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 gradient-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#6594B1]/25"
        >
          Schedule on Calendly
          <ExternalLink size={18} />
        </a>
      </div>

      {/* Contact Details Card */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Contact Information</h3>
        <div className="space-y-5">
          <a
            href={`mailto:${CONTACT_INFO?.email ?? ''}`}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#6594B1]/10 flex items-center justify-center group-hover:bg-[#6594B1]/20 transition-colors">
              <Mail className="w-5 h-5 text-[#6594B1]" />
            </div>
            <div>
              <p className="text-sm text-[#6B6B6B]">Email</p>
              <p className="font-medium text-[#1A1A1A] group-hover:text-[#6594B1] transition-colors">
                {CONTACT_INFO?.email ?? ''}
              </p>
            </div>
          </a>

          <a
            href={`tel:${(CONTACT_INFO?.phone ?? '').replace(/[^\d+]/g, '')}`}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#6594B1]/10 flex items-center justify-center group-hover:bg-[#6594B1]/20 transition-colors">
              <Phone className="w-5 h-5 text-[#6594B1]" />
            </div>
            <div>
              <p className="text-sm text-[#6B6B6B]">Phone</p>
              <p className="font-medium text-[#1A1A1A] group-hover:text-[#6594B1] transition-colors">
                {CONTACT_INFO?.phone ?? ''}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#6594B1]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#6594B1]" />
            </div>
            <div>
              <p className="text-sm text-[#6B6B6B]">Address</p>
              <p className="font-medium text-[#1A1A1A]">
                {CONTACT_INFO?.address ?? ''}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Map Placeholder */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.4523!2d-96.8192!3d33.0247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21f29d0b0a3d%3A0x0!2s5717%20Legacy%20Dr%2C%20Plano%2C%20TX%2075024!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Amplit AI Office Location"
        />
      </div>
    </motion.div>
  );
}
