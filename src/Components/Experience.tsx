import ExperienceContainer from "./ExperienceContainer";
import { jobs } from "../Data/experience";

export default function Experience() {
  return (
    <div className=" grid grid-cols-1 min-h-screen w-full items-center bg-[#0A0E17]">
      <div className="flex flex-row w-full justify-center">
        <div className="border-2 border-[#D4AF37] w-1/4 h-0.5 self-center mx-5" />
        <h1 className="text-5xl text-nowrap">Experience </h1>
        <div className="border-2 border-[#D4AF37] w-1/4 h-0.5 self-center mx-5" />
      </div>
      <div className="relative max-w-full  ">
        <div
          className="
    grid
    grid-cols-1
    lg:grid-cols-3
    gap-10
    w-full
    justify-items-center
    items-center
    bg-[#0A0E17]
    py-20
  "
        >
          {jobs.map((job) => (
            <ExperienceContainer key={job.title} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
