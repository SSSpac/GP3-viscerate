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
    width={1000}
    height={40}
    priority
    className="flex justify-between w-[100%] max-w-[1000px] h-auto hover:opacity-90 transition-opacity"
  />
</section>

      <div className="flex justify-center items-center gap--50 w-auto max-w-[900px] ">
        <ImageButton
          src="/icons/new.download-now.png"
          alt="Download Game"
          href="https://futuregames.itch.io/viscerate"
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
        <p className="text-[#858585] text-2xl leading-relaxed mt-8 mb-8">
          Viscerate is a fast-paced first-person shooter blending roguelite mechanics with strategic depth and modular upgrades. Designed for intermediate to hardcore players, the game delivers an intense combat experience where every run is a fresh challenge. Players craft and customize powerful builds using a mix of modular weapons and strategic deck-building elements,
           ensuring high replayability and tactical freedom. Basically a FPS and rougelike game with you just can't stop playing..
        </p>
      </section>
    </main>
  );
};

export default MainContent;