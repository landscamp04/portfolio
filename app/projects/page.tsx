import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const projects = [
  {
    title: 'Firexplorer',
    description:
      'an interactive wildfire exposure web application for California communities. Users can search any city, adjust a proximity radius, and instantly see 25 years of nearby wildfire activity sourced from CAL FIRE mapped perimeter data. As the map is panned, the data updates in real time — no searching required. Each location receives a risk score based on fire frequency, cumulative acreage burned, and proximity, with safety suggestions tailored to that score. ',
    tags: ['ArcGIS', 'Python', 'Next.js', 'Vercel', 'GIS'],
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
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 40%, #f0f7ff 85%, #dbeafe 100%)',
      }}
    >
      <Header />
      <main className="pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
            Portfolio
          </h1>
          <p className="text-gray-500 mb-12 text-lg">A selection of projects I&apos;ve built.</p>

          <div className="grid grid-cols-1 gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl overflow-hidden shadow-md border border-blue-100 bg-white flex flex-col md:flex-row"
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
                    <h2 className="text-2xl font-bold mb-3" style={{ color: '#1e3a5f' }}>
                      {project.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-5">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-full font-medium"
                          style={{ backgroundColor: '#e8f3ff', color: '#5B8EC4' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg font-semibold border-2 transition-all duration-300 hover:shadow-md hover:shadow-blue-300/50"
                        style={{ color: '#5B8EC4', borderColor: '#5B8EC4' }}
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

