import Header from '../components/Header';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Projects</h1>
          <div className="text-gray-600">
            {/* Project cards will be added in Phase 2 & 3 */}
            <p className="text-lg">Projects will be showcased here...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

