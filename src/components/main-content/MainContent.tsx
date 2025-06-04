'use client';

import React from 'react';
import Image from 'next/image';
import ImageButton from './ImageButton';

const MainContent = () => {
  return (
    <main className="bg-[#13222D] min-h-screen flex flex-col items-center justify-center">
      <section className="w-90% flex justify-center items-center  mb-50">
        <Image 
          src="/icons/VISCERATE.png"
          alt="VISCERATE"
          width={250}
          height={150}
          className="flex justify-between w-[90%] max-w-[400px] h-auto mb-16 hover:opacity-90 transition-opacity duration-300 ease-in-out"
        />
      </section>
      
      <div className="flex justify-center items-center gap--50 w-auto max-w-[900px] -mr-50">
        <ImageButton
          src="/icons/new.download-now.png"
          alt="Download Game"
          href="https://namatakahashi.itch.io/oo"
    width={350} 
    height={90} 
          
        />
        
        <ImageButton
          src="/icons/new.learn-more.png"
          alt="Learn More"
          href ="google.com"
    width={250}  
    height={60} 
              className="w-[90%] max-w-[500px] h-auto mb-16"
  className="mr-50"

        />
      </div>

      <section className="w-full max-w-[700px] text-center px-4">
        <p className="text-gray-500 text-lg leading-relaxed">
          Lorem ip Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna a
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna a
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna a
            sum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>
    </main>
  );
};

export default MainContent;