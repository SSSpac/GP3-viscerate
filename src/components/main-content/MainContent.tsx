"use client";
import React from "react";
import Image from "next/image";
import ImageButton from "./ImageButton";

const MainContent = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[url('/images/bg_3.png')] bg-cover bg-fixed bg-no-repeat bg-top min-h-screen px-6">
      <section className="flex justify-center items-center">
        <h1 className="hidden">Viscerate</h1>
        <Image
          src="/images/title_2.png"
          alt="VISCERATE"
          width={1000}
          height={40}
          priority
          className="flex justify-between w-full max-w-[1000px] h-auto drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] py-12 md:py-0 pt-24 md:pt-0"
        />
      </section>
     
      <div className="flex justify-center items-center gap--50 w-auto max-w-[900px]">
        <a 
          href="https://futuregames.itch.io/viscerate"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-1 transition-all duration-300 ease-in-out group"
        >
          <Image
            src="/icons/new.download-now.png"
            alt="Download Game"
            width={250}
            height={90}
            className="hover:opacity-80 transition-opacity cursor-pointer group-hover:brightness-110"
          />
        </a>

        <a 
          href="/game"
          className="hover:-translate-y-1 transition-all duration-300 ease-in-out group"
        >
            <Image
              src="/icons/new.learn-more.png"
              alt="Learn More"
              width={250}
              height={60}
              className="hover:opacity-80 transition-opacity cursor-pointer group-hover:brightness-110"
            />
        </a>
      </div>
  

      <section className="w-full max-w-[700px] text-center px-4">
        <p className="font-[aboreto] font-bold text-[#858585] text-2xl leading-relaxed mt-8 mb-8">
          Viscerate is a fast-paced first-person shooter blending roguelite mechanics with strategic depth and modular upgrades. Designed for intermediate to hardcore players, the game delivers an intense combat experience where every run is a fresh challenge. Players craft and customize powerful builds using a mix of modular weapons and strategic deck-building elements,
           ensuring high replayability and tactical freedom. Basically a FPS and rougelike game with you just can't stop playing..
        </p>
      </section>
    </main>
  );
};
export default MainContent;
