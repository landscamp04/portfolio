'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'ABOUT', href: '/about' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'CERTIFICATIONS', href: '/certifications' },
  { label: 'CONTACT ME', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
        style={{ backgroundColor: 'rgba(1, 1, 1, 0.85)', backdropFilter: 'blur(8px)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Desktop: Brand on left */}
          <Link
            href="/"
            className="hidden md:block text-sm font-bold tracking-widest text-white hover:text-cyan-400 transition-colors"
          >
            Landon Campos | Portfolio
          </Link>

          {/* Mobile: centered brand (spacer on left to balance hamburger) */}
          <div className="md:hidden w-8" />
          <Link
            href="/"
            className="md:hidden text-sm font-bold tracking-widest text-white hover:text-cyan-400 transition-colors text-center"
          >
            Landon Campos | Digital Portfolio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            {navLinks.slice(0, 3).map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs font-bold tracking-widest transition-colors pb-1 ${
                  pathname === href
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block text-xs font-bold tracking-widest px-5 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200"
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
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
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
        style={{ backgroundColor: 'rgba(1, 1, 1, 0.97)', backdropFilter: 'blur(12px)' }}
      >
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-bold tracking-widest transition-colors duration-200 ${
              pathname === href
                ? 'text-cyan-400'
                : 'text-white hover:text-cyan-400'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
