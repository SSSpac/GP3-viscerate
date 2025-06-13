export type DescriptionSectionProps = {
    id: number;
    imageAlt: string;
    text: string[];
}

export type TeamMember = {
    name: string,
    desc: string,
    photo: string
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
