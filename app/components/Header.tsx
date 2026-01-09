'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <Link href="/about" className="text-xl font-semibold text-white hover:text-blue-200 transition-colors">
            Landon Campos | Digital Portfolio
          </Link>

          {/* Navigation Tabs */}
          <nav className="flex gap-8">
            <Link
              href="/about"
              className={`text-base font-medium transition-colors hover:text-blue-200 pb-1 ${
                pathname === '/about' ? 'text-white border-b-2 border-white' : 'text-blue-100'
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`text-base font-medium transition-colors hover:text-blue-200 pb-1 ${
                pathname === '/projects' ? 'text-white border-b-2 border-white' : 'text-blue-100'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`text-base font-medium transition-colors hover:text-blue-200 pb-1 ${
                pathname === '/contact' ? 'text-white border-b-2 border-white' : 'text-blue-100'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

