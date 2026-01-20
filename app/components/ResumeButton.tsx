import { HiDownload } from 'react-icons/hi';

export default function ResumeButton() {
    return (
        <div className="inline-block" style={{ willChange: 'transform' }}>
            <a
            href="/resume.pdf"
            download="Landon_Campos_Resume.pdf"
            style={{ backgroundColor: '#5B8EC4'}}
            className="inline-flex items-center gap-2 px-6 py-3 border-color text-white font-semibold rounded-lg hover:bg-blue-800 transition-all shadow-md hover:shadow-lg hover:scale-105"
            
            >
                <HiDownload size={20} />
                <span>Download Resume</span>
            </a>
        </div>
    );
}