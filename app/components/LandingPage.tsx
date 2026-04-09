'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from './Header';

export default function LandingPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col relative overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Header />

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        {/* Availability badge */}
        <motion.div
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-7xl md:text-8xl font-extrabold leading-tight mb-6 text-gray-900 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span>Landon </span>
          <span className="text-black">Campos</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-gray-600 tracking-wide mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Software Developer | GIS | AWS | .NET | JS | Py
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Link
            href="/projects"
            className="text-sm font-bold tracking-widest px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            VIEW PROJECTS
          </Link>
          <Link
            href="/about"
            className="text-sm font-bold tracking-widest text-gray-700 hover:text-black transition-all ease-in-out duration-200"
          >
            ABOUT ME
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="flex flex-col items-center gap-3 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
      </motion.div>
    </motion.div>
  );
}
