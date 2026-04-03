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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-neutral-50 rounded-2xl shadow-xl shadow-black/10 border border-gray-200/90 p-8 sm:p-10">

          {/* Heading */}
          <p className="text-xs font-bold tracking-widest text-gray-500 mb-2">WHAT I&apos;VE BUILT</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-1">Portfolio</h1>
          <div className="w-12 h-0.5 bg-gray-900 mb-12" />

          <div className="grid grid-cols-1 gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden border border-gray-200 flex flex-col md:flex-row transition-all duration-300 hover:border-gray-400 hover:shadow-lg hover:shadow-black/10 bg-white"
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
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                      {project.title}
                    </h2>

                    {/* Mobile: expandable description */}
                    <button
                      onClick={() => toggleDescription(project.title)}
                      className="md:hidden flex items-center gap-2 text-xs font-bold tracking-widest text-gray-700 hover:text-gray-900 transition-colors duration-200 mb-4"
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

                    {/* Mobile: conditionally shown description */}
                    <p className={`md:hidden text-gray-600 text-sm leading-relaxed mb-6 ${expanded[project.title] ? 'block' : 'hidden'}`}>
                      {project.description}
                    </p>

                    {/* Desktop: description always visible */}
                    <p className="hidden md:block text-gray-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-bold tracking-wider border border-gray-300 text-gray-800 bg-gray-50"
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
                        className="text-xs font-bold tracking-widest px-6 py-2.5 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
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
