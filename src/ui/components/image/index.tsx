import Image from "next/image";

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

export default function AppImage({
  src,
  alt,
  fill,
  width = 50,
  height = 50,
  className,
}: AppImageProps) {
  if (fill) {
    return (
      <Image src={src} alt={alt} fill={fill} priority className={className} />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      className={className}
    />
  );
}
