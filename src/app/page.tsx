import GameCard from "@/components/GameCard";
import Hpheader from "@/components/hp-header";
import MainContent from "@/components/main-content/MainContent";
import PageTransition from "@/components/Transition";

export default function Home() {
  return (
    <PageTransition>
      <div>
        <Hpheader />
        <MainContent />
        <main className="bg-[var(--background)] min-h-screen flex flex-col items-center justify-center py-10 w-full overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <GameCard
              imageSrc="/images/GM-example1.jpg"
              title="Game mechanic example1"
            />
            <GameCard
              imageSrc="/images/GM-example2.jpg"
              title="Game mechanic example2"
            />
          </div>

          <div className="mt-6">
            <GameCard
              imageSrc="/images/GM-example3.jpg"
              title="Game mechanic example3"
            />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
