import ScrollDownButton from "../../components/ScrollDownButton";
import FrameWrapper from "../../components/FrameWrapper";
import DescriptionSection from "../../components/DescriptionSection";
import { gameHeroText } from "@/data/data";
import GameHeroTextBlock from "@/components/GameHeroTextBlock";

const GamePage = () => {
  return (
    <>
         <section className="mb-30 w-[100%] h-full relative font-inter">
        <div className="">
        <FrameWrapper>
          <div
            className="w-full min-h-[230px] sm:h-[300px] md:h-[320px] lg:h-[590px] xl:h-[610px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bgimage.jpeg')" }}
            role="img"
            aria-label="Hero image"
          ></div>
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
