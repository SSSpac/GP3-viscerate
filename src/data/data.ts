
import { GameHeroProps, LinkItem } from "../types/globals";

export const link:LinkItem = {
  href: "/", 
  text: "Back" 

};


export type features = [
  {
    title: "Game mechanic example1",
    imageSrc: "/images/GM-example1.jpg",
  },
  {
    title: "Game mechanic example2",
    imageSrc: "/images/GM-example2.jpg",
  },
  {
    title: "Game mechanic example3",
    imageSrc: "/images/GM-example3.jpg",
  },
];


export const gameHeroText: GameHeroProps = {
  pageTitle: "Brutal Elegance in Motion",
  paragraph: "Viscerate blends violent precision with strategic depth, pushing players to move with purpose and strike with intent. Every decision counts in a decaying world where mastery means survival."
}