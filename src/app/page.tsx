import GameCard from '@/components/GameCard';
import Hpheader from '@/components/hp-header';
import MainContent from '@/components/main-content/MainContent';

export default function Home() {
  return (
    <div>

      <Hpheader />      
      <MainContent />
      <main className="bg-[var(--background)] min-h-screen flex flex-col items-center justify-center py-10">
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
  );
}

      