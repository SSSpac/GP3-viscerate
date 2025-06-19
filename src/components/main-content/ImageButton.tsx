import Image from 'next/image'
import Link from 'next/link'

interface ImageButtonProps {
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
  target: string;
  onClick?: () => void;
  className?: string;
}

const ImageButton: React.FC<ImageButtonProps> = 
({ src, alt, href, width, height, target, onClick }) => {
  return (
    <Link href={href} target={target}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={onClick}
      />
    </Link>
  )
}

export default ImageButton
