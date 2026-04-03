'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const projects = [
  {
    title: 'Firexplorer',
    description:
      'An interactive wildfire exposure web application for California communities. Users can search any city, adjust a proximity radius, and instantly see 25 years of nearby wildfire activity sourced from CAL FIRE mapped perimeter data. As the map is panned, the data updates in real time — no searching required. Each location receives a risk score based on fire frequency, cumulative acreage burned, and proximity, with safety suggestions tailored to that score.',
    tags: ['ArcGIS SDK for JS', 'TypeScript', 'Next.js'],
    image: '/linkedin-mapview.png',
    links: [
      {
        label: 'StoryMap',
        href: 'https://storymaps.arcgis.com/stories/6ef09b9cb4d6480ea4826a7dfd557635',
      },
      {
        label: 'Web Application',
        href: 'https://firexplorer.vercel.app',
      },
    ],
  },
];

export default function ProjectsPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleDescription = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #010101 0%, #002338 100%)' }}
    >
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <p className="text-xs font-bold tracking-widest text-cyan-400 mb-2">WHAT I&apos;VE BUILT</p>
          <h1 className="text-4xl font-extrabold text-white mb-1">Portfolio</h1>
          <div className="w-12 h-0.5 bg-cyan-400 mb-12" />

          <div className="grid grid-cols-1 gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden border border-white/10 flex flex-col md:flex-row transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                {/* Image */}
                <div className="relative w-full md:w-[420px] shrink-0 h-64 md:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8 flex-1">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white mb-4">
                      {project.title}
                    </h2>

                    {/* Expandable description */}
                    <button
                      onClick={() => toggleDescription(project.title)}
                      className="flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-4"
                    >
                      <span>{expanded[project.title] ? 'Collapse Description' : 'Expand Project Description'}</span>
                      <span
                        className={`inline-block transition-transform duration-300 ${
                          expanded[project.title] ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {expanded[project.title] && (
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 animate-in fade-in duration-200">
                        {project.description}
                      </p>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-bold tracking-wider border border-cyan-400/40 text-cyan-400"
                          style={{ backgroundColor: 'rgba(34,211,238,0.08)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold tracking-widest px-6 py-2.5 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
