export type TeamMember = {
    name: string,
    desc: string,
    photo: string,
    role?: string,
    team?: string
}

export type LinkItem = {
  href: string;
  text:string;
};

export type GameMechanicCardProps = {
  title: string;
  imageSrc: string;
  alt?: string;
}

export type ScrollDownButtonType = {
  text: string,
  navigateTo: string
}
