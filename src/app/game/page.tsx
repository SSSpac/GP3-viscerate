import ScrollDownButton from "../../components/ScrollDownButton";
import FrameWrapper from "../../components/FrameWrapper";
import DescriptionSection from "../../components/DescriptionSection";
import Image from "next/image";

const GamePage = () => {
  return (
    <>
         <section className="mb-30 w-[100%] h-full relative font-inter">
        <div className="">
          <FrameWrapper>
            <img
              src="/images/bg_9.png"
              alt="mock image"
              className="max-w-full max-h-full object-contain"
            />
          </FrameWrapper>
        </div>
        <div className="max-w-xl absolute w-full bottom-10 text-center md:top-1/2 md:right-10  lg:right-30 md:bottom-auto md:text-right md:transform md:-translate-y-4/5 md:space-y-8 text-base">
          <h1 className="md:text-3xl lg:text-5xl p-2">
          
          </h1>
          <div className="w-full flex items-center">
          <h4 className="font-['Aboreto'] text-sm md:text-xl lg:text-xl ">
            Grid Upgrade System – Players can drag and drop upgrade modules into weapon slots, dynamically affecting gameplay.
            Upgrade Modules – 5–10.
          </h4>
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
