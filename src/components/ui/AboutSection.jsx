import React, { useState, useRef, useEffect } from 'react';

const milestones = [
  {
    id: 1,
    date: "Sep 2016 - Jun 2017",
    title: "Intern / Team Member",
    subtitle: "Booster Juice",
    description: "Delivered fast, friendly customer service, prepared smoothies and food items to company standards, and managed inventory during peak hours.",
  },
  {
    id: 2,
    date: "Sep 2017 - Jun 2020",
    title: "High School Education",
    subtitle: "Jasper Place High School",
    description: "Completed foundational secondary education prior to pursuing post-secondary studies.",
  },
  {
    id: 3,
    date: "Apr 2021 - Aug 2023",
    title: "Team Member",
    subtitle: "ACE Liquor Discounter",
    description: "Independently opened and closed the store as a trusted keyholder, managed cash reconciliation, and handled inventory shipments, stock rotation, and customer service.",
  },
  {
    id: 4,
    date: "May 2024 - Sep 2024",
    title: "AI / Software Developer",
    subtitle: "TMIC Wishart Node",
    description: "Enhanced knowledge graph construction using LLM pipelines, fine-tuned Hugging Face models improving relation extraction by 14.6%, and engineered custom GPT chatbots for grant applications.",
  },
  {
    id: 5,
    date: "Jan 2024 - Sep 2024",
    title: "ChemFont Fact Finder",
    subtitle: "Independent Project",
    description: "Designed and implemented a triplet extraction pipeline from research articles using open-source models (LLAMA, BERT, Mistral) and automated quantitative evaluations.",
  },
  {
    id: 6,
    date: "Apr 2026 - Jun 2026",
    title: "Website/Business Developer",
    subtitle: "Bless Rhoo Day Care",
    description: "Designed and deployed a responsive business website using React, TypeScript, and Tailwind CSS, integrating lead generation pipelines and local SEO.",
  },
  {
    id: 7,
    date: "June 2025",
    title: "BSc Graduation",
    subtitle: "University of Alberta",
    description: "Earned a Bachelor of Science with a double major in Computer Science and Biology.",
  },
  {
    id: 8,
    date: "Jul 2026 - Present",
    title: "UI/UX Developer Intern",
    subtitle: "RoboGarden",
    description: "Authored technical reviews for 10 online courses, built high-fidelity Figma prototypes for interactive table-editing interfaces, and worked with Angular and full-stack development.",
    current: true,
  },
  {
    id: 9,
    date: "Fall 2026 - Expected 2028",
    title: "Master of Computer Science",
    subtitle: "University of Ottawa",
    description: "Enrolling as a graduate student concentrating in Applied Artificial Intelligence.",
    upcoming: true,
  },
];

const AboutSection = () => {
  const [activeId, setActiveId] = useState(8);
  const currentItemRef = useRef(null);

  useEffect(() => {
    if (currentItemRef.current) {
      currentItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <section id="about" className="px-4 sm:px-6 md:px-16 lg:px-28 py-16 md:py-20 flex flex-col lg:flex-row items-center gap-y-12 lg:gap-16 overflow-hidden">
      {/* Interactive Scrollable Timeline Journey Map */}
      <div className="w-full lg:flex-1 flex flex-col justify-center min-w-0">
        <div className="max-h-[450px] overflow-y-auto pr-2 sm:pr-4 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
          <div className="relative border-l-2 border-gray-300 ml-4 sm:ml-6 space-y-8 py-2">
            {/* Solid primary line overlay for completed/current section up to RoboGarden */}
            <div className="absolute top-0 left-[-2px] w-[2px] bg-primary h-[calc(83%)] pointer-events-none" />

            {milestones.map((item) => {
              const isActive = activeId === item.id;
              const isPastOrCurrent = item.id <= 8;

              return (
                <div 
                  key={item.id} 
                  ref={item.current ? currentItemRef : null}
                  onClick={() => setActiveId(item.id)}
                  className="relative pl-6 sm:pl-8 cursor-pointer group"
                >
                  {/* Timeline Node Dot */}
                  <div 
                    className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${
                      isActive 
                        ? "bg-primary border-primary scale-125 shadow-md" 
                        : isPastOrCurrent 
                        ? "bg-primary border-primary" 
                        : "bg-white border-gray-300 group-hover:scale-110"
                    }`} 
                  />

                  {/* Content Card */}
                  <div className={`p-4 sm:p-5 rounded-xl border-2 transition-all duration-300 relative w-full box-border break-words ${
                    isActive 
                      ? "border-primary bg-white shadow-lg" 
                      : isPastOrCurrent
                      ? "border-primary/40 bg-white shadow-sm"
                      : "border-gray-200 bg-white/50 hover:border-gray-400"
                  }`}>
                    {item.current && (
                      <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Current
                      </span>
                    )}
                    {item.upcoming && (
                      <span className="absolute top-4 right-4 bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Upcoming
                      </span>
                    )}

                    <span className="text-xs font-bold font-sora text-primary uppercase tracking-wider block pr-16 sm:pr-0">
                      {item.date}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold font-sora text-primary mt-1 pr-16 sm:pr-0">
                      {item.title}
                    </h3>
                    <h4 className="text-xs sm:text-sm font-semibold font-sora text-secondary">
                      {item.subtitle}
                    </h4>
                    <p className="text-xs sm:text-sm font-normal font-sora text-secondary mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:flex-1 min-w-0">
        <div className="mb-8 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <span className="text-4xl md:text-5xl font-normal font-sora text-primary">About</span>
            <span className="text-4xl md:text-5xl font-extrabold font-sora text-primary">Me</span>
          </div>
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <p className="text-base font-normal font-sora text-secondary leading-6">
            I am a Master of Computer Science student at the University of Ottawa concentrating in Applied Artificial Intelligence, having previously earned a Bachelor of Science with a double major in Computer Science and Biology from the University of Alberta. I have a strong foundation in artificial intelligence, natural language processing, and software engineering through both academic and hands-on professional roles as a UI/UX Developer at RoboGarden and an AI Researcher at TMIC Wishart Node.
          </p>

          <p className="text-base font-normal font-sora text-secondary leading-6">
            When I am not in full-on developer mode, you will find me training for long-distance running and marathons, strength training, playing video games, or building innovative side projects to sharpen my technical skills and stay up to date.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;