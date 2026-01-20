import Image from 'next/image';

interface ProfileImageProps {
    size?: number;
}

export default function ProfileImage({ size = 500}: ProfileImageProps) {
    return (
        <div className="flex justify-top-left">
            <div
            className="relative rounded-full overflow-hidden border-4 border-color shadow-black/30 shadow-lg"
            style={{ color: '#5B8EC4',width: size, height: size }}
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