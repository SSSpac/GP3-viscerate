import Image from 'next/image';

interface LogoLinkProps {
  src: string;
  alt: string;
  href: string;
  width?: number;
  height?: number;
}

const LogoLink = ({ src, alt, href, width = 1050, height = 60 }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-[800px] h-[60px] object-contain hover:opacity-90"
        
      />
    </a>
  );
};

export default ImageLink;