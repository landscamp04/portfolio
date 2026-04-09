import { HiDownload } from 'react-icons/hi';

export default function ResumeButton() {
    return (
        <a
            href="/LC_RESUME_2026.pdf"
            download="LC_RESUME_2026.pdf"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-900 text-gray-900 text-xs font-bold tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-200"
        >
            <HiDownload size={16} />
            <span>DOWNLOAD RESUME</span>
        </a>
    );
}