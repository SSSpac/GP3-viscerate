import { FooterMedia, Developers, FooterContactDetails, FooterLinks, FooterCopyright } from "@/types/globals"; 


export const footerContactDetails: FooterContactDetails = {
    title: "Connect with Us",
    phone: "08336016",
    email: "info@futuregames.se"
}
export const footerDevelopersList: Developers[] = [
      {
        id: 1,
        name: "Lava Sharif",
        linkedin: "https://www.linkedin.com/in/lava-sharif-24a400323/",
        icon: "/icons/linkedin.png",
        github: "https://github.com/Lvhacker1",
        giticon: "/icons/github.png",
      },
      {
        id: 2,
        name: "Srilatha Potnuru",
        linkedin: "https://www.linkedin.com/in/sirilatha-potnuru/",
        icon: "/icons/linkedin.png",
        github: "https://github.com/sirilatha",
        giticon: "/icons/github.png",
      },
      {
        id: 3,
        name: "Dimitar Manastirski",
        linkedin: "https://www.linkedin.com/in/dimitar-manastirski/",
        icon: "/icons/linkedin.png",
        github: "https://github.com/Manastirski",
        giticon: "/icons/github.png",
      },
      {
        id: 4,
        name: "May Sunktong",
        linkedin: "https://www.linkedin.com/in/may-sunktong/",
        icon: "/icons/linkedin.png",
        github: "https://github.com/MaySunktong",
        giticon: "/icons/github.png",
      },
      {
        id: 5,
        name: "Bushra Rauf",
        linkedin: "https://www.linkedin.com/in/bushra-rauf/",
        icon: "/icons/linkedin.png",
        github: "https://github.com/BushraRauf",
        giticon: "/icons/github.png",
      },
      {
        id: 6,
        name: "Saifelislam Eisa",
        linkedin: "https://www.linkedin.com/in/saifelislam-eisa/",
        icon: "/icons/linkedin.png",
        github: "https://github.com/SaifElislam",
        giticon: "/icons/github.png",
      }
    ]
  
export const footerMedia: FooterMedia = {
    developers: {
        title: "Developers",
        names: footerDevelopersList

    }
};

export const footerLinks: FooterLinks= {
    links: [
        {id: 1, label: "Home", href: "/", },
        {id: 2, label: "Game", href: "/game", },
        {id: 3, label: "Team", href: "/team", },
    ],
}

export const footerLocation = {
  title: "Location",
  address: "Hammarby Fabriksväg 61, 120 30 Stockholm"
}

export const footerCopyright: FooterCopyright = {
  copyright: `©${new Date().getFullYear()} | VISCERATE Team | All rights reserved | Terms of use | Privacy policy`,
};