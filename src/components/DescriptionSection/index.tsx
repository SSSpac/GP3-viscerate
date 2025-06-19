import React from 'react';

interface SectionProps {
  index: number;
  isImageRight: boolean;
  imageUrl: string;
  imageAlt: string;
  text: string[];
}

const Section = ({ index, isImageRight, imageUrl, imageAlt, text }: SectionProps) => (
  <section className={`min-h-screen ${index !== 1 ? 'mt-5' : 'mt-15'}`}>
    <div id="content" 
         className={`flex flex-row items-center gap-2 md:gap-4 w-full max-w-[100%] overflow-x-hidden px-4 md:px-6 lg:px-8 min-h-screen 
                    ${!isImageRight ? "flex-row-reverse" : ""}`}>
      <div 
        className="flex justify-center w-full h-screen bg-center bg-no-repeat pt-[30px] sm:pt-0
                   sm:w-[90%] mb-[50px] -mt-[30px] sm:h-screen sm:min-h-screen relative"

        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          objectFit: 'contain',
          position: 'relative'
        }}
        aria-label={imageAlt}
      >
        <div className={` text-sm font-['Aboreto'] text-gray-200 font-bold p-30 text-center bottom-12 relative 
          sm:text-2xl sm:bottom-0 sm:text-left sm:p-0 sm:w-60 sm:flex flex-col justify-center 
          ${isImageRight ? "sm:left-[47%]" : "sm:right-[45%]"}`}
        >
          {text.map((t, i) => (
            <p key={i} className=" text-2xl font-medium">{t}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const DescriptionSection = () => {
  const sections = [
    {
      isImageRight: false,
      imageUrl: '/images-game-desc/smg.png',
      imageAlt: 'Combat System',
      text: ['Experience intense', 'close-quarters combat']
    },
    {
      isImageRight: true,
      imageUrl: '/images/bg_6.png',
      imageAlt: 'Dynamic World',
      text: ['Explore a rich', 'immersive environment']
    },
    {
      isImageRight: false,
      imageUrl: '/images/bg_4.png',
      imageAlt: 'Epic Battles',
      text: ['Face challenging', 'enemies and bosses']
    }
  ];

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <Section 
          key={index}
          index={index}
          {...section}
        />
      ))}
    </div>
  );
};

export default DescriptionSection;