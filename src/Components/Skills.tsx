import React from "react";
import { frontendSkills, backendSkills, toolSkills } from "../Data/skills";
import SkillsContainer from "./SkillsContainer";

export default function Skills() {
  return (
    <div className=" grid grid-cols-1 h-screen w-full items-center bg-[#0A0E17]">
      <div className="flex flex-row w-full justify-center">
        <div className="border-2 border-[#D4AF37] w-1/4 h-0.5 self-center mx-5" />
        <h1 className="text-5xl text-nowrap">Skills </h1>
        <div className="border-2 border-[#D4AF37] w-1/4 h-0.5 self-center mx-5" />
      </div>
      <h1 className="text-center text-2xl my-3"><u>Frontend </u></h1>
      <div
        className="grid grid-cols-5 justify-items-center
    items-center lg:mx-10 gap-y-10"
      >
        {frontendSkills.map((skill) => (
          <SkillsContainer key={skill.name} skills={skill} />
        ))}
      </div>
      <h1 className="text-center text-2xl my-3"><u>Backend </u></h1>
      <div
        className="grid grid-cols-5  justify-items-center
    items-center lg:mx-10 "
      >
        {" "}
        {backendSkills.map((skill) => (
          <SkillsContainer key={skill.name} skills={skill} />
        ))}
      </div>
      <h1 className="text-center text-2xl"><u>Other </u></h1>
      <div
        className="grid grid-cols-5 justify-items-center
    items-center my-3 lg:mx-10 "
      >
        {" "}
        {toolSkills.map((skill) => (
          <SkillsContainer key={skill.name} skills={skill} />
        ))}
      </div>
    </div>
  );
}
