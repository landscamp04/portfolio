'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header 
      className="fixed top-0 left-0 right-0 shadow-lg z-50"
      style={{ backgroundColor: '#5B8EC4' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center ">
          {/* Logo/Title 
          <Link href="/" className="text-xl font-semibold text-white hover:text-blue-200 transition-colors">
            Landon Campos | Portfolio
          </Link>
          */}
          {/* Navigation Tabs */}
          <nav className="flex gap-12 justify-center">
            <Link
              href="/about"
              className={`text-base font-bold transition-colors hover:text-blue-200 pb-1 ${
                pathname === '/about' ? 'text-white border-b-2 border-white' : 'text-blue-100'
              }`}
            >
              ABOUT ME
            </Link>
            <Link
              href="/projects"
              className={`text-base font-bold transition-colors hover:text-blue-200 pb-1 ${
                pathname === '/projects' ? 'text-white border-b-2 border-white' : 'text-blue-100'
              }`}
            >
              PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className={`text-base font-bold transition-colors hover:text-blue-200 pb-1 ${
                pathname === '/contact' ? 'text-white border-b-2 border-white' : 'text-blue-100'
              }`}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

