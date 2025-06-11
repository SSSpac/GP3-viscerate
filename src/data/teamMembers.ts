import { TeamMember } from "../types/globals";

export const GameDesignTeam: TeamMember[] = [
  {
    name: "Zonghao Wu",
    role: "PO, Lvl - Gameplay",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Game Design",
  },
  {
    name: "Jacob Yosef",
    role: "System Generalist",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Game Design",
  },
  {
    name: "Max Hjort Tech",
    role: "Narr/Sound",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Game Design",
  },
];

export const GameArtistTeam: TeamMember[] = [
  {
    name: "Max Strömdal Erikssojn",
    role: "Character Artist",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Game Artist",
  },
  {
    name: "Xiyuan Wang",
    role: "Environment - Artist",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Game Artist",
  },
  {
    name: "Ira Aspelin",
    role: "Character prop",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Game Artist",
  },
];

export const GameProgrammerTeam: TeamMember[] = [
  {
    name: "Kiran Gaurdian George",
    role: "Game Programmer",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Game Programmer",
  },
  {
    name: "Mohammed Diab",
    role: "Game Programmer",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Game Programmer",
  },
  {
    name: "Tiger Martin",
    role: "Game Programmer",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Game Programmer",
  },
  {
    name: "Sebastian Valck",
    role: "Game Programmer",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Game Programmer",
  },
];

export const AnimVfxTeam: TeamMember[] = [
  {
    name: "Jesper Turesson",
    role: "VFX Artist",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "ANIM & VFX",
  },
  {
    name: "Sushil Jangra",
    role: "Animator",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "ANIM & VFX",
  },
];

export const ManagementTeam: TeamMember[] = [
  {
    name: "Alvaro Ravello",
    role: "Game Producer",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Management",
  },
  {
    name: "Ammara Waqas",
    role: "Project Manager",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Management",
  },
  {
    name: "Ola Jansson",
    role: "Release Manager",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Management",
  },
  {
    name: "Mayc Lövgren",
    role: "Release Manager",
    photo: "/team-members/mock-member.png",
    desc: "description",
    team: "Management",
  },
];

export const teamMembers: TeamMember[] = [
  ...GameDesignTeam,
  ...GameArtistTeam,
  ...GameProgrammerTeam,
  ...AnimVfxTeam,
  ...ManagementTeam,
];
