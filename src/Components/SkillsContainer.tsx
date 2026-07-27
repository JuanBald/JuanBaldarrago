import React from "react";
import type { SkillProps } from "../Types/Skills";

interface SkillContainerProps {
  skills: SkillProps;
}

export default function SkillsContainer({ skills }: SkillContainerProps) {
  return (
    <div className="group relative flex flex-col items-center">

      {/* Tooltip */}
      <span
        className="
          absolute
          -top-14
          px-4
          py-2
          rounded-xl
          bg-[#0A0E17]
          border
          border-[#D4AF37]/50
          text-[#D4AF37]
          text-base
          font-semibold
          opacity-0
          translate-y-2
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-y-0
          whitespace-nowrap
          shadow-lg
        "
      >
        {skills.name}
      </span>

      {/* Icon Container */}
      <div
        className="
          flex items-center justify-center
          h-16 w-16
          lg:h-32 lg:w-32
          rounded-2xl
          bg-gradient-to-b from-white/[0.04] to-white/[0.01]
          border border-white/10
          transition-all duration-300
          group-hover:border-[#D4AF37]/60
          group-hover:shadow-[0_0_25px_-5px_rgba(212,175,55,0.5)]
          group-hover:-translate-y-1
        "
      >
        <skills.icon 
          className="
            text-3xl 
            lg:text-6xl 
            text-gray-300
            transition-colors 
            duration-300
            group-hover:text-[#D4AF37]
          "
        />
      </div>

    </div>
  );
}