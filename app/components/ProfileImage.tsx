import Image from 'next/image';

interface ProfileImageProps {
    size?: number;
}

export default function ProfileImage({ size = 500}: ProfileImageProps) {
    return (
        <div className="flex justify-top-left">
            <div
            className="relative rounded-full overflow-hidden border-2 border-gray-400 shadow-lg shadow-black/20"
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