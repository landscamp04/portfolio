import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const certifications = [
  {
    title: 'Unity Essentials',
    image: '/Unity-Badge.png',
    url: 'https://www.credly.com/users/landon-campos/badges#credly',
  },
  {
    title: 'PMI Kickoff',
    image: '/Kickoff-Badge.png',
    url: 'https://www.credly.com/users/landon-campos/badges#credly',
  },
];

export default function CertificationsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #010101 0%, #002338 100%)' }}
    >
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <p className="text-xs font-bold tracking-widest text-cyan-400 mb-2">Courses &</p>
          <h1 className="text-4xl font-extrabold text-white mb-1">Certifications</h1>
          <div className="w-12 h-0.5 bg-cyan-400 mb-12" />

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex flex-col items-center border border-white/10 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                {/* Square image container */}
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>

                {/* Title */}
                <p className="text-white text-sm font-bold text-center tracking-wide mb-3">
                  {cert.title}
                </p>

                {/* Optional link */}
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-widest px-4 py-1.5 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200"
                  >
                    VIEW
                  </a>
                )}
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
