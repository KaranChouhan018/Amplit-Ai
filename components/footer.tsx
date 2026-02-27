"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand/15">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-10 w-24">
                <Image
                  src="/logo.png"
                  alt="Amplit AI"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-black/80 text-base leading-relaxed max-w-md">
              Amplit AI is a healthcare-focused AI company building intelligent
              solutions that reduce operational burden and improve patient
              engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-black/80 text-sm hover:text-brand transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/acucogn-scribe"
                  className="text-black/80 text-sm hover:text-brand transition-colors"
                >
                  AcuCogn Scribe
                </Link>
              </li>
              <li>
                <Link
                  href="/dentsi"
                  className="text-black/80 text-sm hover:text-brand transition-colors"
                >
                  Dentsi
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black/80 text-sm hover:text-brand transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black/80 text-sm hover:text-brand transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-black font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-black/80 text-sm hover:text-brand transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-black/80 text-sm hover:text-brand transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span className="text-black/80 text-sm">
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand/15">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-black/80 text-sm">
              © {new Date().getFullYear()} Amplit AI. All rights reserved.
            </p>
            <p className="text-black/80 text-sm">
              Healthcare AI Solutions | Plano, Texas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
