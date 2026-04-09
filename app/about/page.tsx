import Header from '../components/Header';
import ProfileImage from '../components/ProfileImage';
import SocialLinks from '../components/SocialLinks';
import ResumeButton from '../components/ResumeButton';
import Footer from '../components/Footer';
import AboutImage from '../components/aboutImage';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-neutral-50 rounded-2xl shadow-xl shadow-black/10 border border-gray-200/90 p-8 sm:p-10">
          {/* Page heading */}
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest text-gray-500 mb-2">WHO I AM</p>
            <h1 className="text-4xl font-extrabold text-gray-900">About Me</h1>
            <div className="mt-3 w-12 h-0.5 bg-gray-900" />
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column */}
            <div>
              {/* Profile intro */}
              <div className="flex items-center gap-5 mb-8">
                <div className="flex-shrink-0">
                  <ProfileImage size={110} />
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  I&apos;m <span className="font-bold text-gray-900">Landon Campos</span>, a
                  Software Developer specializing in GIS
                  and education technology.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
                <div>
                  <h3 className="text-base font-bold tracking-widest text-gray-500 mb-3">BACKGROUND</h3>
                  <p>
                    I&apos;m a SoCal native who is passionate about technology, snowboarding, fitness, and sports. Although I still have two semesters left until graduation, I am already gaining valuable experience within professional environments and projects at ITPI, working on the MAP Initiative.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold tracking-widest text-gray-500 mb-3">THE TURNING POINT</h3>
                  <p className="mb-3">
                    Leading up to September 2024, I was the typical SDE, grinding leetcode, brainstorming apps to build, and looking to gain a SDE internship. However, during September, the Line Fire ignited less than a quarter mile from my house in Highland, CA.
                  </p>
                  <p className="mb-3">
                    As my community rallied to face the disaster, and then recover, it sparked a question: how can we be better prepared as people who live in areas at risk of serious disasters, and how can we respond better?
                  </p>
                  <p className="mb-3">
                    This led me down the path of GIS and geospatial analysis. I researched disaster mapping and risk assessment. Throughout 2025 — between school and working two jobs — I was unable to dedicate the time this path deserved.
                  </p>
                  <p>
                    Then in Fall 2025 I attended ESRI&apos;s open house, connected with GIS professionals, and learned how valuable GIS is in saving lives, organization, and decision making. I decided to dedicate as much time as possible to this field.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold tracking-widest text-gray-500 mb-3">WHAT DRIVES ME</h3>
                  <p>
                    I believe the best solutions come from open minds and serendipitous problem solving. Beyond code and maps, I enjoy working within teams, and I&apos;m committed to always getting better — whether that&apos;s in the gym, on the slopes, or maintaining the habits that keep me sharp.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <ResumeButton />
                <SocialLinks />
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden lg:block">
              <AboutImage />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
