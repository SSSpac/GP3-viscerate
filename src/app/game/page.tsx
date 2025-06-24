import ScrollDownButton from "../../components/ScrollDownButton";
import FrameWrapper from "../../components/FrameWrapper";
import DescriptionSection from "../../components/DescriptionSection";
import { gameHeroText } from "@/data/data";

const GamePage = ({pageTitle = gameHeroText.pageTitle, paragraph = gameHeroText.paragraph }) => {
  return (
    <>
         <section className="mb-30 w-[100%] h-full relative font-inter">
        <div className="">
          <FrameWrapper>
            <img
              src="/images/21bg.jpeg"
              alt="mock image"
              className="max-w-full max-h-full object-contain"
            />
          </FrameWrapper>
        </div>
        <div className="md:max-w-xl  p-6 absolute w-full bottom-20 text-center md:top-30 md:right-10 lg:max-w-[600px] lg:right-40 lg:top-70 md:text-center md:transform md:-translate-y-4/5 md:space-y-8 text-base flex flex-col justify-self-center lg:text-left">
          <h1 className="font-aboreto md:text-3xl lg:text-[55px] p-2">
            {pageTitle}
          </h1>
          <div className="w-full flex items-center">
          <p className="font-inter text-sm lg:text-xl xl:text-2xl ">
            {paragraph}
          </p>
          </div>
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
