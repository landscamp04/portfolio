import Image from 'next/image';

export default function AboutImage() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg h-[785px] relative" style={{ willChange: 'contents' }}>
      <Image
        src="/side-column-photo.jpeg"
        alt="Landon Campos at ESRI Geography Conference"
        fill
        className="object-cover"
        priority
        quality={100}
      />
    </div>
  );
}

