import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-28 py-16 md:py-20 flex flex-col lg:flex-row items-center gap-y-12 lg:gap-16">
      {/* Image Section */}
      <div className="w-full lg:flex-1 flex justify-center">
        <img
          src="/images/img_group_1000015845.svg"
          alt="About Me"
          className="w-1/2 md:w-2/5 lg:w-1/2 h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:flex-1">
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