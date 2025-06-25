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

export type FooterLinks = {
  title: string;
  links: { 
    id: number;
    label?: string;
    href: string;
    logo?: string;
  }[];
}

export type Developers = {
  id: number;
  name: string;
};

export type FooterMedia = {
  developers: {
    title: string;
    names: Developers[];
  };
};

export type FooterContactDetails = {
  title: string;
  phone: string;
  email: string;
}

export type FooterCopyright = {
  copyright: string;
}

export type footerLocation = {
  title: string;
  Visitingaddress: string;
  mapLink ?: string;
}

export type GameHeroProps = {
  pageTitle: string;
  paragraph: string;
}