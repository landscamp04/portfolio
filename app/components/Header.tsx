'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{ backgroundColor: 'rgba(1, 1, 1, 0.85)', backdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-base text-sm font-bold tracking-widest text-white hover:text-cyan-400 transition-colors"
        >
          Landon Campos | Portfolio
        </Link>

        {/* Nav */}
        <nav className="flex gap-10">
          {[
            { label: 'ABOUT', href: '/about' },
            { label: 'PROJECTS', href: '/projects' },
            { label: 'CERTIFICATIONS', href: '/certifications' },
          ].map(({ label, href }) => (
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

        {/* CTA */}
        <Link
          href="/contact"
          className="text-xs font-bold tracking-widest px-5 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200"
        >
          CONTACT ME
        </Link>
      </div>
    </header>
  );
}

