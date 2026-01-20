'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SkillsMarquee from './AnimatedSkillsArc';

export default function LandingPage() {
  //const allSkills = ['Python', 'AWS', 'Azure', 'NextJS', '.NET', 'SQL', 'ArcGIS'];
  const allSkills = [''];
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after background fades in
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 30%, #e8f3ff 70%, #d0e7ff 100%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center z-10">
        {/* Name - Simple fade in */}
        <motion.h1
          className="text-7xl font-helvetica font-bold mb-4"
          style={{ color: '#5B8EC4' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          Landon Campos
        </motion.h1>

        {/* Subtitle - appears after name */}
        {showContent && (
          <>
            <motion.p
              className="text-xl mb-8 font-light tracking-wide"
              style={{ color: '#7BA3D9' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Software Developer | GIS | AWS | .NET | JS
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link
                href="/projects"
                className="px-8 py-3 bg-transparent font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-400/50 border-2 transition-colors"
                style={{ 
                  color: '#5B8EC4',
                  borderColor: '#5B8EC4'
                }}
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 bg-transparent font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-400/50 border-2 transition-colors"
                style={{ 
                  color: '#5B8EC4',
                  borderColor: '#5B8EC4'
                }}
              >
                About Me
              </Link>
            </motion.div>
          </>
        )}
      </div>

      {/* Subtle grain/texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-noise pointer-events-none" />

      {/* Skills marquee across top */}
      <SkillsMarquee skills={allSkills} />
    </motion.div>
  );
}

