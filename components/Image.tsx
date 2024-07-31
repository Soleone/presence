import NextImage from 'next/image';
import cl from 'clsx';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isClickable?: boolean;
  isHoverable?: boolean;
  classNames?: string;
}

export default function Image({ src, alt, width, height, isClickable = false, isHoverable = false, classNames }: ImageProps) {
  const isExternalSource = src.startsWith("http");
  const finalClassNames = cl(
    classNames,
    isHoverable && 'hover:scale-105',
    isClickable && 'cursor-pointer',
    (isClickable || isHoverable) && 'transform-gpu transition'
  );

  return (
    isExternalSource ?
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={finalClassNames} /> :
      <NextImage src={src} alt={alt} className={finalClassNames} width={width} height={height} />
  );
};