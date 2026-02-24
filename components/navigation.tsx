'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/90 backdrop-blur-md border-b border-[#30363d]/50">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32">
              <Image
                src="/logo.png"
                alt="Amplit AI"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setProductDropdown(true)}
                    onMouseLeave={() => setProductDropdown(false)}
                  >
                    <button className="flex items-center space-x-1 nav-link text-sm font-medium">
                      <span>{link.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {productDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 card-dark rounded-lg overflow-hidden"
                        >
                          {link.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-[#8B949E] hover:text-white hover:bg-[#21262d] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`nav-link text-sm font-medium ${
                      pathname === link.href ? 'text-[#6594B1]' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href={CONTACT_INFO.calendly}
              target="_blank"
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#6594B1] rounded-lg hover:bg-[#4A7A99] transition-all hover:shadow-lg hover:shadow-[#6594B1]/25"
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-medium text-[#6594B1] border border-[#6594B1] rounded-lg hover:bg-[#6594B1] hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[#30363d]/50"
            >
              <div className="py-4 space-y-4">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    {link.hasDropdown ? (
                      <div className="space-y-2">
                        <span className="block px-4 text-sm font-medium text-white">
                          {link.label}
                        </span>
                        {link.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-8 py-2 text-sm text-[#8B949E]"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-sm text-[#8B949E]"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 space-y-3">
                  <Link
                    href={CONTACT_INFO.calendly}
                    target="_blank"
                    className="block w-full text-center px-5 py-2.5 text-sm font-medium text-white bg-[#6594B1] rounded-lg"
                  >
                    Request Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-5 py-2.5 text-sm font-medium text-[#6594B1] border border-[#6594B1] rounded-lg"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
