import React, { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function SkillsSection({ skills }) {
  const width = useWindowWidth();
  const isMobile = width < 768; // Mobile breakpoint at 768px

  const [showAll, setShowAll] = useState(false);

  const initialCount = isMobile ? 3 : 9;

  const visibleSkills = showAll ? skills : skills.slice(0, initialCount);

  // Show toggle if skills are more than initial count or if showing all
  const showToggle = skills.length > initialCount || showAll;

  return (
    <section id="skills" className="px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
          <span className="text-3xl sm:text-4xl md:text-5xl font-normal font-sora text-primary">My</span>
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sora text-primary">Skills</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
        {visibleSkills.map((skill, index) => (
          <div
            key={index}
            className={`w-full aspect-square border-2 border-primary rounded flex flex-col items-center justify-center p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-default ${
              skill.dark ? "bg-primary" : "bg-white"
            }`}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-4 object-contain"
              style={{ filter: "brightness(0) saturate(100%)" }}
            />
            <span
              className={`text-lg sm:text-xl font-bold font-sora text-center capitalize ${
                skill.dark ? "text-white" : "text-primary"
              }`}
            >
              {skill.name}
            </span>
          </div>
        ))}

        {showToggle && (
          <div
            onClick={() => setShowAll(!showAll)}
            className="w-full aspect-square border-2 border-dashed border-primary rounded flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow select-none bg-white"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") setShowAll(!showAll);
            }}
            aria-label={showAll ? "Show less skills" : "Show more skills"}
          >
            <span className="text-5xl font-bold text-primary select-none">
              {showAll ? "\u2212" /* minus sign */ : "..."}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}