import React, { useEffect, useState } from "react";
import type { WorkProps } from "../Types/Work";

interface ExperienceContainerProps {
  job: WorkProps;
}

export default function ExperienceContainer({ job }: ExperienceContainerProps) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Mount the modal content one tick after `open`, so the transition
  // has a "from" state to animate away from instead of just appearing.
  useEffect(() => {
    if (isModalOpen) {
      const id = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(id);
    } else {
      setIsVisible(false);
    }
  }, [isModalOpen]);

  // Close on Escape, close on backdrop click — expected dialog behavior
  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div>
      {/* Experience Card */}
      <div
        className="
          container
          grid
          grid-cols-1
          rounded-4xl
          text-amber-50
          card
          w-full
          max-w-xs
          sm:max-w-sm
          lg:w-96
          mx-auto
          shadow-sm
          p-4
          sm:p-5
          border-4
          bg-[#202d4a29]
          border-[#0A0E17]
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:border-[#B8860B]
        "
      >
        <figure>
          <img
            className="w-32 h-32 sm:w-44 sm:h-44 lg:w-60 lg:h-60 mx-auto object-contain"
            src={job.logo}
            alt={`${job.title} logo`}
          />
        </figure>

        <div className="card-body px-2 sm:px-4">
          <h2 className="card-title justify-center text-center text-lg sm:text-xl text-[#D4AF37]">
            {job.title}
          </h2>

          <h3 className="card-title justify-center text-center text-base sm:text-lg">
            {job.position}
          </h3>

          <p className="flex justify-center text-sm sm:text-base">
            {job.duration}
          </p>

          <div className="card-actions justify-center mt-2">
            <button
              className="
                btn
                bg-[#d0b664]
                hover:bg-[#D4AF37]
                border-[#D4AF37]
                transition-all
                duration-300
                hover:scale-[1.03]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
              "
              onClick={() => setModalOpen(true)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Modal OUTSIDE card */}
      {isModalOpen && (
        <dialog
          open
          className="modal modal-open"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div
            className={`
              modal-box max-w-3xl w-11/12 rounded-4xl
              max-h-[85vh] overflow-y-auto
              border-[#D4AF37] border-2
              p-4 sm:p-8
              transition-all duration-300 ease-out
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
          >
            <div className="grid grid-cols-1 gap-0.5 mb-3">
              <h3 className="font-bold text-sm sm:text-lg text-[#D4AF37]">
                {job.title}
              </h3>

              <h3 className="font-semibold text-xs sm:text-lg">{job.position}</h3>

              <h3 className="font-normal text-xs sm:text-base text-gray-300">
                {job.duration}
              </h3>
            </div>

            <ul className="font-serif text-xs sm:text-lg list-disc list-inside space-y-1.5 sm:space-y-3 leading-snug">
              {job.description.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>

            <div className="modal-action mt-3 sm:mt-6">
              <button
                className="
                  btn
                  btn-sm
                  sm:btn-md
                  bg-[#d0b664]
                  hover:bg-[#D4AF37]
                  border-[#0A0E17]
                  transition-all
                  duration-300
                "
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}