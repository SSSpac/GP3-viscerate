import ScrollDownButton from "../../components/ScrollDownButton";
import FrameWrapper from "../../components/FrameWrapper";
import DescriptionSection from "../../components/DescriptionSection";
import { descriptionSectiondata } from "../../data/descriptionSection";
import Image from "next/image";

const GamePage = () => {
  return (
    <>
      <section className="mb-50 w-full h-full relative font-inter">
        <div className="md:w-[80%] h-[70vh] md:h-[80vh] w-full">
          <FrameWrapper>
            <img
              src="/images-game-desc/Weixin2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </FrameWrapper>
        </div>
        <div className="max-w-xl absolute w-full bottom-10 text-center md:top-1/2 md:right-10  lg:right-30 md:bottom-auto md:text-right md:transform md:-translate-y-4/5 md:space-y-8 text-base">
          <h1 className="md:text-3xl lg:text-5xl p-2">
          
          </h1>
          <h4 className="text-sm md:text-xl lg:text-2xl text-white font-bold">
            Grid Upgrade System – Players can drag and drop upgrade modules into weapon slots, dynamically affecting gameplay.
Upgrade Modules – 5–10.
          </h4>
        </div>
        <div className="absolute -bottom-30 md:-bottom-18 left-1/2 transform -translate-x-1/2 z-10">
          <ScrollDownButton text="Scroll for more info" navigateTo="content" />
        </div>
      </section>
     <section>
        {descriptionSectiondata.map((section, index) => (
          <DescriptionSection key={section.id} {...section} index={index + 1} />
        ))}
      </section>
    </>
  );
};

export default GamePage;
