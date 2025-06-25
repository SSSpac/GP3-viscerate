import { GameHeroProps } from "@/types/globals";

const GameHeroTextBlock = ({ pageTitle, paragraph }: GameHeroProps) => {
  return (
    <div className="md:max-w-xl p-6 absolute w-full bottom-20 text-center md:top-30 md:right-10 lg:max-w-[600px] lg:right-40 lg:top-70 md:text-center md:transform md:-translate-y-4/5 md:space-y-8 text-base flex flex-col justify-self-center lg:text-left">
      <h1 className="font-aboreto md:text-3xl lg:text-[55px] p-2">
        {pageTitle}
      </h1>
      <div className="w-full flex items-center">
        <p className="font-inter text-sm lg:text-xl xl:text-2xl">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default GameHeroTextBlock