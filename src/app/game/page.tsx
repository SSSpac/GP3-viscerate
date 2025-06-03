import ScrollDownButton from "../../components/ScrollDownButton";
import FrameWrapper from "../../components/UI/FrameWrapper";

const GamePage = () => {
  return (
    <section className="w-[100%] h-[75dvh]">
      <FrameWrapper>
        <img
          src="/images-game-desc/mock-image1.png"
          alt="mock image"
          className="w-full h-full object-cover"
        />
      </FrameWrapper>
      <ScrollDownButton text="Scroll Down" navigateTo="content" />
    </section>
  );
};

export default GamePage;
