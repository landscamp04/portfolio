'use client';

interface SkillsMarqueeProps {
  skills: string[];
}

export default function SkillsMarquee({ skills }: SkillsMarqueeProps) {
  const skillsText = skills.join('  ');
  
  return (
    <div className="fixed top-0 left-0 right-0 h-16 pointer-events-none z-0 overflow-hidden flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {/*<span className="inline-block px-4 text-white text-xl font-futura font-medium tracking-wide skill-text">
          {skillsText} + {skillsText} + {skillsText} + {skillsText}
        </span>*/}
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
        .skill-text {
          text-shadow-white: 
        }
        .font-futura-bold {
          font-family: 'Futura', 'Futura PT', 'Century Gothic', 'Apple Gothic', sans-serif;
        }
      `}</style>
    </div>
  );
}

