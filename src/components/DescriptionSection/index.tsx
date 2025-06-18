import { DescriptionSectionProps } from "@/types/globals";
import Image from "next/image";

const DescriptionSection = ({id, imageAlt, text, index, imageSrc}: DescriptionSectionProps & {index: number}) => {
    const isImageRight = index % 2 === 0;
    
    return (
      <section className={`${index === 1 ? 'mt-30' : 'mt-0'}`}>
  <div
    id="content"
    className={`flex flex-row items-center gap-6 w-full max-w-[100%] overflow-x-hidden px-4 md:px-6 lg:px-8 
      ${isImageRight ? "" : "flex-row-reverse"}`}
  >
    <div className="relative flex justify-center mt-[70px] mb-[30px] w-full h-[200px] 
                    sm:w-[80%] sm:h-auto sm:my-[90px] sm:min-h-[300px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill 
        sizes=" (max-width: 1000px) 90vw, 1000px"
        priority={index === 0}
      />
      <div
        className={`text-sm text-blue-200 font-bold p-2 text-center bottom-12 relative 
          sm:text-2xl sm:bottom-0 sm:text-left sm:p-0 sm:w-60 sm:flex flex-col justify-center 
          ${isImageRight ? "sm:left-[47%]" : "sm:right-[45%]"}`}
      >
        {text.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </div>
  </div>
</section>
    );
}
export default DescriptionSection;