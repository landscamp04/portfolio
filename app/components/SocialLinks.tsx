import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
    return (
        <div className="flex gap-4 text-gray-400">
            <a
                href="https://www.linkedin.com/in/landon-campos-6a1366176"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors duration-200"
                aria-label="LinkedIn"
            >
                <FaLinkedin size={22} />
            </a>
            <a
                href="https://github.com/landscamp04"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors duration-200"
                aria-label="GitHub"
            >
                <FaGithub size={22} />
            </a>
        </div>
    );
}