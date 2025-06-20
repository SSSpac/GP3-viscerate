
export type DescriptionSectionProps = {
    id: number;
    imageAlt: string;
    text: string[];
    imageSrc: string;
}

export type TeamMember = {
    name: string,
    desc?: string,
    photo: string,
    role: string,
    team?: string,
    favorites?: string,
}
export type GameMechanicCardProps = {
  title: string;
  imageSrc: string;
  alt?: string;
}

export type LinkItem = {
  href: string;
  text:string;
};

export type ScrollDownButtonType = {
  text: string,
  navigateTo: string
}


export interface TruncateTextProps {
  text: string | undefined | null;
  wordLimit?: number;
  className?: string;
}
