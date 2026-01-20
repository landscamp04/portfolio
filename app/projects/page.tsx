import Header from '../components/Header';
import Footer from '../components/Footer';

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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Portfolio</h1>
          <div className="text-gray-700">
            {/* Project cards will be added in Phase 2 & 3 */}
            <p className="text-lg">Projects will be showcased here...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

