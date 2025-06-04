import Image from 'next/image';


const ImageButton = ({ 
  src, 
  alt, 
  href, 
  onClick, 
  width = 850, 
  height = 60 
}) => {
  const buttonClass = " hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer";
  const imageClass = "w-[500px] h-[60px] object-contain hover:opacity-60";
  
  const content = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={imageClass}
    />
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
    >
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={buttonClass}>
      {content}
    </button>
  );
};

export default ImageButton;