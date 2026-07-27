import React from "react";
import ProfileImg from "../assets/MeCartoon.png";

export default function AboutMe() {
  return (
    <div>
      <div className="w-full h-[100vh] bg-[#0A0E17] text-white">
        <div className=" grid grid-cols-1  h-full text-center place-items-center ">
          <div className="flex flex-row w-full justify-center">
            <div className="border-2 border-[#D4AF37] w-1/4 h-0.5 self-center mx-5" />
            <h1 className="text-5xl text-nowrap">About</h1>
            <div className="border-2 border-[#D4AF37] w-1/4 h-0.5 self-center mx-5" />
          </div>
          <div className="container border-2 border-[#D4AF37] h-[40vh] w-[40vh] rounded-full overflow-auto">
            <img
              src={ProfileImg}
              className="rounded-full"
              alt="A cool ass nigga"
            />
          </div>
          <div className="container h-fit w-2/3 text-pretty lg:text-xl sm:text-sm">
            <h1>
              <span className="font-bold text-[#D4AF37]">
                Computer Science student
              </span>{" "}
              and{" "}
              <span className="font-bold text-[#D4AF37]">
                Software Engineering Intern at SciTec
              </span>
              , passionate about building reliable software and exploring how
              technology can solve real-world problems. I enjoy creating{" "}
              <span className="font-bold text-[#D4AF37]">
                modern web applications
              </span>
              , improving user experiences, and turning ideas into functional
              products. Through my experience with{" "}
              <span className="font-bold text-[#D4AF37]">
                full-stack development
              </span>
              , <span className="font-bold text-[#D4AF37]">cybersecurity</span>,
              and{" "}
              <span className="font-bold text-[#D4AF37]">
                data-driven projects
              </span>
              , I’m constantly learning, experimenting with new technologies,
              and growing as an engineer.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
