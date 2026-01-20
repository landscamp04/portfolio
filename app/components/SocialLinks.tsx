import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
    return (
        <div className="flex gap-4"
        style={{ color: '#5B8EC4', willChange: 'transform' }}>
            {/* Below is the linkedin button */}
            <div className="w-12 h-12" style={{ willChange: 'transform' }}>
                <a
                href = "https://www.linkedin.com/in/landon-campos-6a1366176"
                target = "_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-color transition-all hover:scale-115"
                aria-label="LinkedIn"
                >
                    <FaLinkedin size={24} />
                </a>
            </div>
            {/* Below is the github button */}
            <div className="w-12 h-12" style={{ willChange: 'transform' }}>
                <a
                href="https://github.com/landscamp04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-color transition-all hover:scale-115"
                aria-label="GitHub"
                >
                    <FaGithub size={24} />
                </a>
            </div>
        </div>
    );
}