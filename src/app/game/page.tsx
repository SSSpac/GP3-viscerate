import ScrollDownButton from "../../components/ScrollDownButton";
import FrameWrapper from "../../components/UI/FrameWrapper";

const GamePage = () => {
  return (
    <section className="w-[100%] h-[75dvh]">
      <FrameWrapper>
        <img
          src="/images/mock-image1.png"
          alt="mock image"
          className="w-full h-full object-cover"
        />
      </FrameWrapper>
      <ScrollDownButton text="Scroll Down" navigateTo="content" />
      <p id="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, omnis ipsa quisquam laboriosam incidunt ut voluptatem delectus similique dolor ratione dolorum consequuntur illum laborum, eveniet sunt dolore soluta placeat aspernatur? Voluptatibus laborum amet, molestias officia nulla nobis, facilis cupiditate hic voluptate reprehenderit dolores sequi labore corporis magni nisi quo ex, nam quaerat sunt mollitia fugiat delectus! Impedit dicta dolor nemo tempora, officiis voluptas iusto! Animi, illum fugit velit numquam praesentium ratione? Officiis, magni veniam deleniti ut sed nisi provident repellat quisquam eligendi, tenetur ipsam at praesentium laborum. Voluptatum, nisi cum non reprehenderit repudiandae corporis necessitatibus culpa dolore beatae officia eligendi laboriosam officiis illo aut fugiat molestiae, voluptas nihil? Distinctio possimus doloremque iure cum non et quidem labore sint explicabo neque natus voluptatum cumque, illo perferendis eum sunt, delectus quas id voluptatem sapiente veritatis sit voluptate pariatur! Magni delectus amet distinctio a sit quae! Atque nulla sint natus autem ducimus magnam ut voluptates neque architecto! Accusamus eos hic quidem tempora porro iusto laborum nisi officiis veritatis! Debitis quisquam vero accusamus beatae, voluptate, cupiditate explicabo numquam hic porro quas nostrum suscipit id quaerat quod officia consectetur, natus ducimus asperiores? Tenetur qui quisquam quis hic asperiores atque! Amet fuga cumque quibusdam odit atque.</p>
    </section>
  );
};

export default GamePage;
