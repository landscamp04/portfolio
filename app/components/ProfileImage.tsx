import Image from 'next/image';

interface ProfileImageProps {
    size?: number;
}

export default function ProfileImage({ size = 500}: ProfileImageProps) {
    return (
        <div className="flex justify-top-left">
            <div
            className="relative rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-black/50"
            style={{ width: size, height: size }}
            >
                <Image
                src="/lc-headshot.jpg"
                alt="Landon Campos"
                fill
                className="object-cover"
                priority/>
            </div>
        </div>
    );
}