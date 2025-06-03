import GameCard from "./components/GameCard";
import { features } from "../types/globals";


export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[var(--backgroundColor)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-6xl mx-auto">
        {features.slice(0, 2).map((feature, index) => (
          <div
            key={index}
            className="max-w-md mx-auto "
          >
            <GameCard title={feature.title} imageSrc={feature.imageSrc} />
          </div>
        ))}
      <div className="col-span-1 md:col-span-2 flex justify-center">
        <div className="max-w-md mx-auto ">
          <GameCard title={features[2].title} imageSrc={features[2].imageSrc} />
        </div>
        </div>
      </div>
    </main>
  );
}
