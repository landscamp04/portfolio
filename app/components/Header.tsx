'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'ABOUT', href: '/about' },
  { label: 'EXPERIENCE', href: '/experience' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'CERTIFICATIONS', href: '/certifications' },
  { label: 'CONTACT ME', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/90 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Desktop: Brand on left */}
          <Link
            href="/"
            className="hidden md:block text-sm font-bold tracking-widest text-gray-900 hover:text-black transition-colors"
          >
            Landon Campos | Portfolio
          </Link>

          {/* Mobile: centered brand (spacer on left to balance hamburger) */}
          <div className="md:hidden w-8" />
          <Link
            href="/"
            className="md:hidden text-sm font-bold tracking-widest text-gray-900 hover:text-black transition-colors text-center"
          >
            Landon Campos | Digital Portfolio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            {navLinks.slice(0, 4).map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-xs font-bold tracking-widest transition-colors pb-1 group ${
                    isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {label}
                  {/* Center-outward underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full bg-gray-900 origin-center transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block text-xs font-bold tracking-widest px-5 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            CONTACT ME
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-10 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(250, 250, 250, 0.98)', backdropFilter: 'blur(12px)' }}
      >
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-bold tracking-widest transition-colors duration-200 ${
              pathname === href
                ? 'text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
