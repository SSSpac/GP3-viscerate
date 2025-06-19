import Image from 'next/image';
import { GameMechanicCardProps } from "@/types/globals";


const GameCard = ({ title, imageSrc, alt }:GameMechanicCardProps) => {
  return (
    <div className="p-4 w-full flex justify-center">
      <div className="w-full max-w-[513px]">
       
        <div className="relative w-full h-[180px] sm:h-[220px] md:h-[288px]">
          <Image
            src={imageSrc}
            alt={alt || title || "Game mechanic example"}
            fill
            priority
            className="object-cover rounded-md"
            sizes="(min-width: 1024px) 513px, (min-width: 768px) 90vw,100vw"
          />
        </div>
        <p className="mt-6 text-[var(--extraground)] font-inter text-center text-sm sm:text-lg md:text-2xl lg:text-[38px] whitespace-nowrap w-full mx-auto truncate">
          “{title}”
        </p>
      </div>
    </div>
  );
};

export default GameCard;
