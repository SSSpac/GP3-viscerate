'use client'
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
            <Image
              src="/images/21bg.jpeg"
              alt="Hero image"
              width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}
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
