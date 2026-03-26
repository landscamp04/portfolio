import { HiDownload } from 'react-icons/hi';

export default function ResumeButton() {
    return (
        <a
            href="/LC_RESUME_2026.pdf"
            download="LC_RESUME_2026.pdf"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-cyan-400 text-cyan-400 text-xs font-bold tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-200"
        >
            <HiDownload size={16} />
            <span>DOWNLOAD RESUME</span>
        </a>
    );
}