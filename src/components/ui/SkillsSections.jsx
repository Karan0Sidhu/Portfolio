import React, { useState } from "react";

export default function SkillsSection({ skills }) {
  const [showAll, setShowAll] = useState(false);

  // Default to showing 11 skills initially (leaving room for the toggle card to complete a row)
  const initialCount = 11;
  const visibleSkills = showAll ? skills : skills.slice(0, initialCount);
  const showToggle = skills.length > initialCount || showAll;

  return (
    <section id="skills" className="px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
          <span className="text-3xl sm:text-4xl md:text-5xl font-normal font-sora text-primary">My</span>
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sora text-primary">Skills</span>
        </div>
      </div>

      {/* Flexbox container guarantees clean wrapping across iOS Chrome without grid track bugs */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {visibleSkills.map((skill, index) => (
          <div
            key={index}
            className={`w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(16.666%-1.25rem)] aspect-square border-2 border-primary rounded flex flex-col items-center justify-center p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-default ${
              skill.dark ? "bg-primary" : "bg-white"
            }`}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-14 h-14 sm:w-16 sm:h-16 mb-2 sm:mb-4 object-contain"
              style={{ filter: "brightness(0) saturate(100%)" }}
            />
            <span
              className={`text-base sm:text-lg font-bold font-sora text-center capitalize ${
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
            className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(16.666%-1.25rem)] aspect-square border-2 border-dashed border-primary rounded flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow select-none bg-white"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") setShowAll(!showAll);
            }}
            aria-label={showAll ? "Show less skills" : "Show more skills"}
          >
            <span className="text-5xl font-bold text-primary select-none">
              {showAll ? "\u2212" : "..."}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}