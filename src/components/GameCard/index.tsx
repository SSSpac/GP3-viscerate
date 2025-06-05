import Image from 'next/image';
import { GameMechanicCardProps } from "@/types/globals";

const GameCard: React.FC<GameMechanicCardProps> = ({ title, imageSrc, alt }) => {
  return (
    <div className="p-4 w-full flex justify-center">
      <div className="w-full max-w-[513px]">
       
        <div className="relative w-full h-[180px] md:h-[288px] md:w-[513px] mx-auto">
          <Image
            src={imageSrc}
            alt={alt || title || "Game mechanic example"}
            fill
            priority
            className="object-cover rounded-md"
            sizes="(min-width: 768px) 513px, 100vw"
          />
        </div>
        <p className="mt-6 text-[var(--extraground)] font-inter text-center md:text-[38px] flex flex-col space-y-2  w-full sm:text-[24px] md:w-[513px] mx-auto">
          “{title}”
        </p>
      </div>
    </div>
  );
};

export default GameCard;
