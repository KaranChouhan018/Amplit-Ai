'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-[#30363d]/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-10 w-32">
                <Image
                  src="/logo.png"
                  alt="Amplit AI"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-[#8B949E] text-sm leading-relaxed max-w-md">
              AI That Amplifies Care. We build healthcare AI solutions that handle 
              missed calls, scheduling, and repetitive tasks — so your team can focus 
              on what matters most: patient care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#8B949E] text-sm hover:text-[#6594B1] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/acucogn-scribe" className="text-[#8B949E] text-sm hover:text-[#6594B1] transition-colors">
                  AcuCogn Scribe
                </Link>
              </li>
              <li>
                <Link href="/dentsi" className="text-[#8B949E] text-sm hover:text-[#6594B1] transition-colors">
                  Dentsi
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#8B949E] text-sm hover:text-[#6594B1] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#8B949E] text-sm hover:text-[#6594B1] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#6594B1] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#8B949E] text-sm hover:text-[#6594B1] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#6594B1] flex-shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#8B949E] text-sm hover:text-[#6594B1] transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#6594B1] flex-shrink-0 mt-0.5" />
                <span className="text-[#8B949E] text-sm">
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#30363d]/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#6E7681] text-sm">
              © {new Date().getFullYear()} Amplit AI. All rights reserved.
            </p>
            <p className="text-[#6E7681] text-sm">
              Healthcare AI Solutions | Plano, Texas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
