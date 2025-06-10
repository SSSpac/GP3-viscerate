'use client';
import React from 'react';
import Image from 'next/image';
import ImageButton from './ImageButton';

const MainContent = () => {
  return (
    <main className="bg-[#13222D] min-h-screen flex flex-col items-center justify-center">
    <section className="w-90% flex justify-center items-center pt-[180px] mb-15">
  <Image 
    src="/icons/VISCERATE.png"
    alt="VISCERATE"
    width={250}
    height={140}
    priority
    className="flex justify-between w-[100%] max-w-[1000px] h-auto hover:opacity-90 transition-opacity"
  />
</section>

      <div className="flex justify-center items-center gap--50 w-auto max-w-[900px] ">
        <ImageButton
          src="/icons/new.download-now.png"
          alt="Download Game"
          href="https://namatakahashi.itch.io/oo"
          width={250} 
          height={90} 
          onClick={() => {}} 
        />

        <ImageButton
          src="/icons/new.learn-more.png"
          alt="Learn More"
          href="/game"
          width={250}
          height={60} onClick={undefined}          
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