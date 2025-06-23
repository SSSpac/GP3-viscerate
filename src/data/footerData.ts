import { FooterMedia, Developers, FooterContactDetails, FooterLinks, FooterCopyright } from "@/types/globals"; 


export const footerContactDetails: FooterContactDetails = {
    title: "Connect with Us",
    phone: "08336016",
    email: "info@futuregames.se"
}
export const footerDevelopersList: Developers[] = [
      {
        id: 1,
        name: "Bushra Rauf",
      },
      {
        id: 2,
        name: "Dimitar Manastirski",
       
      },
      {
        id: 3,
        name: "May Sunktong",
      },
      {
        id: 4,
        name: "Lava Sharif",
      },
      {
         id: 5,
        name: "Srilatha Potnuru",
      },
      {
        id: 6,
        name: "Saifelislam Eisa",
      }
    ]
  
export const footerMedia: FooterMedia = {
    developers: {
        title: "Web Developers",
        names: footerDevelopersList

    }
};

export const footerLinks: FooterLinks= {
  title: "Quick Links",
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
  copyright: `©${new Date().getFullYear()} | VISCERATE Team | All rights reserved`,
};