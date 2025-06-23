import GameCard from "@/components/GameCard";
import Hpheader from "@/components/hp-header";
import MainContent from "@/components/main-content/MainContent";
import PageTransition from "@/components/Transition";
import Image from "next/image";

export default function Home() {
  return (
    <PageTransition>
      <div>
        <Hpheader />
        <MainContent />
        <p className="text-hero-body mt-8 font-bold text-center text-2xl">
          Discover our game
        </p>
        <main className="bg-background min-h-screen flex flex-col items-center justify-center py-10 w-full overflow-x-hidden">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <GameCard
              imageSrc="/images/bg_1.jpeg"
              title="Goth Castle"
            />
            <GameCard
              imageSrc="/images/bg_6.png"
              title="Toxic Zone"
            />
          </div>

          <div className="w-full mt-6 mb-6">
            <GameCard
              imageSrc="/images/bg_7.png"
              title="Bio-Punk Horror"
            />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
