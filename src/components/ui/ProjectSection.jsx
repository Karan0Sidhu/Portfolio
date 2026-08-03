import React from 'react';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="bg-primary py-16 md:py-20">
      <div className="px-6 md:px-16 lg:px-28">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-4xl md:text-5xl font-normal font-sora text-white">My</span>
            <span className="text-4xl md:text-5xl font-extrabold font-sora text-white">Projects</span>
          </div>
        </div>

        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full lg:flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-auto rounded-2xl object-cover ${
                    project.id === '04' ? 'brightness-0 invert' : ''
                  }`}
                />
              </div>

              {/* Content */}
              <div className="w-full lg:flex-1">
                <h2 className="text-3xl md:text-5xl font-extrabold font-sora text-white mb-4 md:mb-6">
                  {project.id}
                </h2>
                <h3 className="text-xl md:text-3xl font-bold font-sora text-white mb-4 md:mb-6">
                  {project.title}
                </h3>
                <p className="text-base font-normal font-sora text-secondary leading-6 mb-6 md:mb-8">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  {project.repolink && (
                    <img
                      src="/images/img_export.svg"
                      alt="Link"
                      className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => window.open(project.repolink, '_blank')}
                    />
                  )}
                  {project.id === '01' && (
                    <>
                      <img
                        src="/images/img_export.svg"
                        alt="Link"
                        className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() =>
                          window.open(
                            'https://github.com/Karan0Sidhu/Bioin_401_Project7',
                            '_blank'
                          )
                        }
                      />
                      <img
                        src="/images/img_export.svg"
                        alt="Link"
                        className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() =>
                          window.open(
                            'https://github.com/navdeep5/Bioinformatics_Text_Mining_Chatbot',
                            '_blank'
                          )
                        }
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;