'use client';
import GameCard from '@/components/GameCard';
import Hpheader from '@/components/hp-header';
import MainContent from '@/components/main-content/MainContent';
import Image from 'next/image';
import PageTransition from '@/components/Transition';
import Image from 'next/image';


export default function Home() {
  return (
    <PageTransition>
   <div>
      <Hpheader />      
      <MainContent />

      <h1 className="text-[#858585] mt-8 font-bold text-center text-2xl"> Discover our game </h1>
      <main className="bg-[var(--background)] min-h-screen flex flex-col items-center justify-center py-10 w-full overflow-x-hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">

          <GameCard
<<<<<<< HEAD
            imageSrc="/icons/GM-example1.png"
            title="Game mechanic example1"
          />
          <GameCard
            imageSrc="/icons/GM-example2.png"
            title="Game mechanic example2"
=======
            imageSrc="/images-game-desc/Dark.png"
            title="Goth Castle"
          />
          <GameCard
            imageSrc="/images-game-desc/Grey.png"
            title="Toxic Zone"
>>>>>>> t7/feature/footer-layout
          />
        </div>

        <div className="w-full mt-6 mb-6">
          <GameCard
<<<<<<< HEAD
            imageSrc="/icons/GM-example3.png"
            title="Game mechanic example3"
=======
            imageSrc="/images-game-desc/Atomic.png"
            title="Bio-Punk Horror"
>>>>>>> t7/feature/footer-layout
          />
        </div>
      </main>
    </div>
          </PageTransition>
  
  );
}

