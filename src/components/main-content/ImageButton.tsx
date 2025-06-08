import Image from 'next/image'
import Link from 'next/link'

interface ImageButtonProps {
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
  onClick?: () => void;
}

const ImageButton: React.FC<ImageButtonProps> = ({ src, alt, href, width, height, onClick }) => {
  return (
    <Link href={href}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={onClick}
        className="hover:opacity-80 transition-opacity cursor-pointer"
      />
    </Link>
  )
}

export default ImageButton