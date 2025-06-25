import ScrollDownButton from "../../components/ScrollDownButton";
import FrameWrapper from "../../components/FrameWrapper";
import DescriptionSection from "../../components/DescriptionSection";
import { gameHeroText } from "@/data/data";
import GameHeroTextBlock from "@/components/GameHeroTextBlock";
import Image from "next/image";

const GamePage = () => {
  return (
    <>
         <section className="mb-30 w-[100%] h-full relative font-inter">
        <div className="">
        <FrameWrapper>
            <img
              src="/images/bg-image.png"
              alt="mock image"
              className="max-w-full max-h-full object-contain"
            />
        </FrameWrapper>
        </div>
        <div>
          <GameHeroTextBlock pageTitle={gameHeroText.pageTitle} paragraph={gameHeroText.paragraph} />
        </div>
        <div className="absolute -bottom-30 md:-bottom-18 left-1/2 transform -translate-x-1/2 z-10">
          <ScrollDownButton text="Scroll for more info" navigateTo="content" />
        </div>
      </section>
     <section>
      <DescriptionSection />
      </section>
    </>
  );
};

export default GamePage;
