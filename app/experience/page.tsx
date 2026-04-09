import Header from '../components/Header';
import Footer from '../components/Footer';

const experience = [
  {
    title: 'Software Engineer Intern',
    company: 'ITPI Software Solutions (MAP Initiative)',
    period: 'June 2024 – August 2024',
    location: 'Redlands, CA',
    bullets: [
      'Integrated large language models (LLMs) into enterprise workflows, enhancing the MAP platform used across California Community Colleges; applied machine learning and AI-driven automation to improve functionality and user experience.',
      'Developed and optimized backend services in C#/.NET with SQL databases, improving system scalability, elasticity, and responsiveness for high-traffic applications.',
      'Collaborated in Agile teams using Azure DevOps to create and review pull requests, manage CI/CD pipelines, and ensure code quality through structured version control practices.',
      'Built and maintained web applications with Next.js and REST APIs, implementing modern frontend frameworks and connecting them with robust backend services.',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-neutral-50 rounded-2xl shadow-xl shadow-black/10 border border-gray-200/90 p-8 sm:p-10">

          {/* Heading */}
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest text-gray-500 mb-2">CAREER PATH</p>
            <h1 className="text-4xl font-extrabold text-gray-900">Experience</h1>
            <div className="mt-3 w-12 h-0.5 bg-gray-900" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-14">
              {experience.map((job) => (
                <div key={job.title + job.company} className="pl-8 relative">
                  {/* Dot */}
                  <span className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-gray-900 ring-2 ring-white" />

                  <h2 className="text-xl font-extrabold text-gray-900 mb-1">{job.title}</h2>
                  <p className="text-sm italic text-gray-500 mb-1">{job.company}</p>
                  <p className="text-xs text-gray-400 tracking-wide mb-5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mr-1.5 align-middle" />
                    {job.period}
                    {job.location && (
                      <span className="ml-3 text-gray-400">{job.location}</span>
                    )}
                  </p>

                  <ul className="space-y-3">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-gray-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
