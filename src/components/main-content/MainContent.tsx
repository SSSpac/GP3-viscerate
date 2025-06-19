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
      <div className="flex justify-center items-center gap-4 md:gap-6 w-auto max-w-[900px] flex-col md:flex-row">
        <ImageButton
          src="/icons/download-now.png"
          alt="Download Game"
          href="https://futuregames.itch.io/viscerate"
          width={300}
          height={100}
          target="_blank"
        />
        <ImageButton
          src="/icons/learn-more.png"
          alt="Learn More"
          href="/game"
          width={300}
          height={100}
          target="_self"
        />
      </div>
      <section className="w-full max-w-[700px] text-center p-2 md:pt-6">
        <p className="text-hero-body text-md md:text-lg leading-relaxed tracking-tighter md:tracking-tight pt-4 md:pt-0">
          Viscerate is a fast-paced first-person shooter blending roguelite
          mechanics with strategic depth and modular upgrades. Designed for
          intermediate to hardcore players, the game delivers an intense combat
          experience where every run is a fresh challenge. Players cragft and
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
