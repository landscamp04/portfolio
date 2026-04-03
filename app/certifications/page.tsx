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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-neutral-50 rounded-2xl shadow-xl shadow-black/10 border border-gray-200/90 p-8 sm:p-10">

          {/* Heading */}
          <p className="text-xs font-bold tracking-widest text-gray-500 mb-2">Courses &</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-1">Certifications</h1>
          <div className="w-12 h-0.5 bg-gray-900 mb-12" />

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex flex-col items-center border border-gray-200 p-5 transition-all duration-300 hover:border-gray-400 hover:shadow-lg hover:shadow-black/10 bg-white"
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
                <p className="text-gray-900 text-sm font-bold text-center tracking-wide mb-3">
                  {cert.title}
                </p>

                {/* Optional link */}
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-widest px-4 py-1.5 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
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
