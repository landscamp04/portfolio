'use client';

import { 
  SiPython, 
  SiJavascript, 
  SiSharp,
  SiMysql,
  SiNextdotjs, 
  SiReact, 
  SiDotnet, 
  SiNodedotjs,
  SiAmazonwebservices, 
  SiGit,
  SiArcgis
} from 'react-icons/si';
import { TbCloud } from 'react-icons/tb';

const skills = [
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'C#', icon: SiSharp },
  { name: 'SQL', icon: SiMysql },
  { name: 'ArcGIS', icon: SiArcgis },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'ASP.NET', icon: SiDotnet },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Azure', icon: TbCloud },
  { name: 'AWS', icon: SiAmazonwebservices },
  { name: 'Git', icon: SiGit },
];

export default function Footer() {
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 py-2 overflow-hidden z-40 border-t border-gray-700/80"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
    >
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-2 mx-10 text-gray-300"
            >
              <skill.icon size={12} />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}
