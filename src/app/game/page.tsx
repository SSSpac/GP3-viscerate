import ScrollDownButton from "../../components/ScrollDownButton";
import FrameWrapper from "../../components/UI/FrameWrapper";

const GamePage = () => {
  return (
    <div className="w-full h-full relative font-inter">
      <div className="md:w-[80%] h-[80vh] w-full">
        <FrameWrapper>
          <img
            src="/images-game-desc/mock-image1.png"
            alt="mock image"
            className="w-full h-full object-cover"
          />
        </FrameWrapper>
        <div className="max-w-xl absolute bottom-4 w-full text-center md:top-1/2 md:right-30 md:bottom-auto md:text-right md:transform md:-translate-y-4/5 space-y-8 text-base">
          <h1 className="md:text-2xl lg:text-5xl p-2">
            “Amazing descriptive text placeholder”
          </h1>
          <h4 className="text-sm md:text-xl lg:text-2xl">
            “even more text placeholder”
          </h4>
        </div>
      </div>
      <ScrollDownButton text={`"Scroll for more info"`} navigateTo="content" />
    </div>
  );
};

export default GamePage;
