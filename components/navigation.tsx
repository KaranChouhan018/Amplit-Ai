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
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white  shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-24">
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
                    <button className="flex items-center space-x-1 text-sm font-medium text-black hover:text-brand transition-colors">
                      <span>{link.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {productDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-4 w-56 bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl shadow-black/5 border border-brand/10 p-1.5"
                        >
                          {link.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-3 text-[14px] font-medium text-black rounded-xl hover:text-brand hover:bg-brand/5 transition-all duration-200"
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
                    className={`text-sm font-medium transition-colors ${pathname === link.href ? 'text-brand' : 'text-black hover:text-brand'
                      }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href={CONTACT_INFO.calendly}
              target="_blank"
              className="px-6 py-2.5 text-sm font-medium text-white rounded-full bg-brand"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-xl shadow-black/5 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <div className="space-y-2">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                    >
                      {link.hasDropdown ? (
                        <div className="space-y-1 mb-2">
                          <button
                            onClick={() => toggleMobileDropdown(link.label)}
                            className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-medium text-black rounded-xl hover:bg-brand/5 transition-all"
                          >
                            <span>{link.label}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdowns[link.label] ? 'rotate-180 text-brand' : 'text-gray-400'}`} />
                          </button>
                          <AnimatePresence>
                            {mobileDropdowns[link.label] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pr-2 py-2 space-y-1 ml-4 border-l-2 border-brand/10">
                                  {link.children?.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      className="block px-4 py-3 text-[14px] font-medium text-black/60 rounded-xl hover:text-brand hover:bg-brand/5 transition-all active:scale-[0.98]"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="block px-4 py-3 text-[15px] font-medium text-black rounded-xl hover:text-brand hover:bg-brand/5 transition-all active:scale-[0.98]"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="pt-6 border-t border-gray-100"
                >
                  <Link
                    href={CONTACT_INFO.calendly}
                    target="_blank"
                    className="flex items-center justify-center w-full px-6 py-3.5 text-[15px] font-semibold text-white rounded-xl bg-brand hover:bg-brand-dark active:scale-[0.98] transition-all shadow-md shadow-brand/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
