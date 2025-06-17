import Image from 'next/image';

interface LogoLinkProps {
  src: string;
  alt: string;
  href: string;
  width?: number;
  height?: number;
}

const LogoLink: React.FC<LogoLinkProps> = ({ src, alt, href, width = 1200, height = 60 }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:-translate-y-1 transition-all duration-900 ease-in-out cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-[900px] h-[60px] object-contain hover:opacity-90"
      />
    </a>
  );
};

export default LogoLink;