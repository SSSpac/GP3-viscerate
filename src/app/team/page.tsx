"use client";
import { useState } from "react";
import { teamMembers } from "../../data/teamMembers";
import { TeamMember } from "@/types/globals";
import { AnimatePresence, motion } from "framer-motion";
import TruncateText from "../../components/TruncateText";
import Image from "next/image";

function MemberBox({ name, photo, role, desc }: TeamMember) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center sm:flex-row w-full h-lg sm:even:flex-row-reverse gap-5 transition-transform duration-300 ease-in-out hover:scale-102"
    >
      <div className="justify-center w-48 md:w-60 aspect-square rounded-full bg-extraground overflow-hidden shadow transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-700">
        <img
          className="w-full h-full object-cover object-center"
          src={photo}
          alt={name}
        />
      </div>
      <div className="flex flex-col gap-2 align-middle justify-center items-center sm:items-start text-center sm:text-left">
        <p className="text-center text-xl md:text-3xl">{name}</p>
        <p className="text-sm max-w-xs italic">{role}</p>
        <TruncateText text={desc} wordLimit={20} className="text-sm max-w-xs text-gray-300" />
      </div>
    </motion.div>
  );
}

const teams = [
  "All",
  "Game Designers",
  "Game Artists",
  "Game Programmers",
  "ANIM & VFX",
  "Management",
  "Web Developers",
];

function Team() {
  const [selectedTeam, setSelectedTeam] = useState("All");

  const filteredMembers =
    selectedTeam === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.team === selectedTeam);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-9 md:px-32 lg:px-48 font-inter text-center">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl md:text-6xl">The Team</h1>
        <p className="text-xl text-center">
          A short description of the team and of the work/or work process
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-1 md:gap-3 justify-center py-6 text-[0.7rem] md:text-xs">
        {teams.map((team) => (
          <button
            type="button"
            key={team}
            onClick={() => setSelectedTeam(team)}
            className={`py-1 px-2 md:px-4 md:py-2 rounded-full border cursor-pointer transition-colors duration-200 ${
              selectedTeam === team
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-300"
            }`}
          >
            {team}
          </button>
        ))}
      </div>

      {/* Members */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTeam}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 gap-8 w-full max-w-350 py-4 md:pt-8"
        >
          {filteredMembers.map((member, index) => (
            <MemberBox
              key={member.name}
              name={member.name}
              role={member.role}
              desc={member.desc}
              photo={member.photo || "/team-members/fallback-member.png"}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Team;
