import React from 'react'
import { teamMembers } from '../../data/teamMembers';
import { TeamMember } from '@/types/globals';


function MemberBox({ name, desc, photo }: TeamMember) {
  return (
    <div className="flex flex-col items-center sm:flex-row w-full h-lg sm:even:flex-row-reverse gap-8">
      <div className="justify-center w-60 h-60 min-w-60 min-h-60 rounded-full bg-extraground">
        <img className="w-full h-full rounded-full" src={photo} alt="" />
      </div>
      <div className="flex flex-col gap-8 align-middle justify-center items-center sm:items-start">
        <h1 className="text-4xl">{name}</h1>
        <p className="text-sm max-w-xs">{desc}</p>
      </div>
    </div>
  )
}

function Team() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-7 gap-20">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-6xl">The Team</h1>
          <p className="text-xl sm: text-center">A short description of the team and of the work/or work process</p>
        </div>
        <div className="grid grid-cols-1 gap-12 w-full max-w-350">
          {
            teamMembers.map((teamMember, index) =>
              <MemberBox key={index++} name={teamMember.name} desc={teamMember.desc} photo={teamMember.photo} />)
          }
        </div>
      </div>
    </>
  )
}

export default Team;