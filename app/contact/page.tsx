import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-neutral-50 rounded-2xl shadow-xl shadow-black/10 border border-gray-200/90 p-8 sm:p-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact</h1>
          <div className="text-gray-700">
            {/* Contact information will be added in Phase 2 */}
            <p className="text-lg">Contact information coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

