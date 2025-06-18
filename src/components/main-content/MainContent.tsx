"use client";
import React from "react";
import Image from "next/image";
import ImageButton from "./ImageButton";

const MainContent = () => {
  return (
    <main className="bg-foreground min-h-screen flex flex-col items-center justify-center px-6">
      <section className="flex justify-center items-center pt-48 pb-12 md:pb-0 md:pt-[180px] mb-15">
        <Image
          src="/icons/VISCERATE.png"
          alt="VISCERATE"
          width={870}
          height={40}
          priority
          className="flex justify-between w-[80%] md:w-[100%] max-w-[1000px] h-auto hover:opacity-90 transition-opacity"
        />
      </section>

      <div className="flex justify-center items-center gap-4 md:gap-6 w-auto max-w-[900px] flex-col md:flex-row">
        <ImageButton
          src="/icons/new.download-now.png"
          alt="Download Game"
          href="https://futuregames.itch.io/viscerate"
          width={300}
          height={100}
          onClick={() => {}}
          className="w-[70%] md:w-[100%]"
        />

        <ImageButton
          src="/icons/new.learn-more.png"
          alt="Learn More"
          href="/game"
          width={300}
          height={100}
          onClick={undefined}
        />
      </div>

      <section className="w-full max-w-[700px] text-center p-2 md:p-12">
        <p className="text-hero-body text-md md:text-lg leading-relaxed mt-8 mb-8 tracking-tighter md:tracking-tight">
          Viscerate is a fast-paced first-person shooter blending roguelite
          mechanics with strategic depth and modular upgrades. Designed for
          intermediate to hardcore players, the game delivers an intense combat
          experience where every run is a fresh challenge. Players craft and
          customize powerful builds using a mix of modular weapons and strategic
          deck-building elements, ensuring high replayability and tactical
          freedom. Basically a FPS and rougelike game with you just can't stop
          playing..
        </p>
      </section>
    </main>
  );
};

export default MainContent;
