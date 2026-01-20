import Header from '../components/Header';
import ProfileImage from '../components/ProfileImage';
import SocialLinks from '../components/SocialLinks';
import ResumeButton from '../components/ResumeButton';
import Footer from '../components/Footer';
import AboutImage from '../components/aboutImage';

export default function AboutPage() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 40%, #f0f7ff 85%, #dbeafe 100%)', color: '#5B8EC4'
      }}
      
      
    >
      <Header />
      
      <main className="pt-18 pb-18" style={{ transform: 'scale(1.1)', transformOrigin: 'top center' }}>
      <h1 className="text-3xl font-bold text-color mb-8 text-center">ABOUT ME</h1>
        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Profile & Content */}
            <div>
              {/* Profile Section - centered alignment */}
              <div className="flex items-center gap-4 mb-4">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <ProfileImage size={120} />
                </div>
                
                {/* Text only - now truly centered with photo */}
                <div className="flex items-center ">
                  <p className="text-base  text-gray-700">
                    I'm <span className="font-semibold text-gray-900">Landon Campos</span>, a<br/>
                    Software Developer specializing in GIS<br/>
                    and education technology
                  </p>
                </div>
              </div>

              {/* Hello Section */}
              <div>
                {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Hello!
                </h2>
                */}

                <div className="text-sm text-gray-700 space-y-4 ">
                  {/* Background Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Background</h3>
                    <p>
                      I'm a SoCal native who is passionate about technology, snowboarding, fitness, and sports. Although I still have two semesters left until graduation, I am already gaining valuable experience within professional environments and projects at ITPI, working on the MAP Initiative.
                    </p>
                  </div>

                  {/* The Turning Point Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">The Turning Point</h3>
                    <p className="mb-2">
                      Leading up to September 2024, I was the typical SDE, grinding leetcode, brainstorming apps to build, and looking to gain a SDE internship. However, during September, the Line Fire ignited less than a quarter mile from my house in Highland, CA.
                    </p>
                    <p className="mb-2">
                      As my community rallied to face the disaster, and then recover, it sparked a question from me: how can we be better prepared as people who live in areas that are at risk of serious disasters, and how can we respond better?
                    </p>
                    <p className="mb-2">
                      This led me down the path of GIS and geospatial analysis. Whilst I did not have the tools immediately to connect the relationships I wanted to, and visualize the data in a way that was readable, I knew with practice that I can do those things I wanted to do. I researched disaster mapping, and risk assessment. Throughout 2025 between school, and working two jobs, I was unable to delegate the time needed to pursue this further.
                    </p>
                    <p>
                      Then in the Fall 2025, I attended ESRI's open house and connected with GIS professionals, learned how valuable GIS is in saving lives, organization, decision making, and decided that I want to dedicate as much time as possible to this field.
                    </p>
                  </div>

                  {/* What Drives Me Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">What Drives Me?</h3>
                    <p>
                      I believe the best solutions come from open minds and serendipitous problem solving. Beyond code and maps, I enjoy working within teams, and I'm committed to always getting better, whether that's in the gym, on the slopes, or creating and maintaining healthy habits that keep me on my toes.
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-4">
                  <ResumeButton />
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* Right Column - About Image */}
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