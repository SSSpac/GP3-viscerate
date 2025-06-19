import React from 'react';
import Image from 'next/image';

interface SectionProps {
  index: number;
  isImageRight: boolean;
  imageUrl: string;
  imageAlt: string;
  text: string[];
}

const Section = ({ index, isImageRight, imageUrl, imageAlt, text }: SectionProps) => (
  <section className={`${index !== 2? '-mb-10' : 'mb-1'} mb-8`}>
    <div id="content" 
         className={`flex flex-row items-center gap-6 w-full max-w-[100%]  overflow-x-hidden lg:px-8
                    ${!isImageRight ? "flex-row-reverse" : ""}`}>
      <div 
        className="flex justify-center
    w-full
    h-[200px] pt-2 mb-0 bg-cover bg-center bg-no-repeat
    sm:w-[80%] sm:h-auto sm:my-2 sm:min-h-[300px]
    md:w-full md:h-[60vh] md:pt-2 md:mb-0 md:min-h-0
    lg:w-[90%] lg:h-[60vh] lg:min-h-screen
    relative"

        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          objectFit: 'contain',
          position: 'relative'
        }}
        aria-label={imageAlt}
      >
        <div className={` text-sm font-['Aboreto'] text-gray-200 font-bold p-10 text-center bottom-12 relative 
          sm:text-2xl sm:bottom-0 sm:text-left sm:p-0 sm:w-60 sm:flex flex-col justify-center 
          ${isImageRight ? "sm:left-[30%]" : "sm:right-[32%]"}`}
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
      imageUrl: '/images/bg_7.png',
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