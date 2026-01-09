import Header from '../components/Header';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Contact</h1>
          <div className="text-gray-600">
            {/* Contact information will be added in Phase 2 */}
            <p className="text-lg">Contact information coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

