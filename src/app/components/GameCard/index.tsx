'use client'

import Image from "next/image";

type GameCardProps = {
  title: string;
  imageSrc: string;
};

const GameCard = ({ title, imageSrc }: GameCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden max-w-sm mx-auto h-[288px] w-[513] ">
      <div className="relative w-full h-1/2">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover "
          sizes="(max-width:768px) 100vw, 400px"
          priority
        />
      </div>
      <div className="h-1/2 flex items-center justify-center p-2 text-center text-white">
        <h3 className="text-lg font-semibold font-serif tracking-wide">"{title}"</h3>
      </div>
    </div>
  );
};

export default GameCard;
