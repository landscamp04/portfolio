'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from './Header';

export default function LandingPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #010101 0%, #002338 100%)' }}
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
          className="text-7xl md:text-8xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-white">Landon </span>
          <span style={{ color: '#22d3ee' }}>Campos</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-gray-400 tracking-wide mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Software Developer | GIS | AWS | .NET | JS | Py
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Link
            href="/projects"
            className="text-sm font-bold tracking-widest px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200"
          >
            VIEW PROJECTS
          </Link>
          <Link
            href="/about"
            className="text-sm font-bold tracking-widest text-gray-300 hover:text-cyan-400 transition-all ease-in-out duration-200"
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

