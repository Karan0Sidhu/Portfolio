import { Typewriter } from "react-simple-typewriter";

export default function HeroSection({ jobTitles }) {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left text container */}
      <div className="flex-1 max-w-4xl">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-normal font-sora text-primary">Hello I am</span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sora text-primary">Karan Sidhu.</span>
          </div>

          <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold font-sora text-primary mb-2">
            <Typewriter
              words={jobTitles}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>

          <span className="text-3xl sm:text-4xl md:text-5xl font-normal font-sora text-primary block mb-6">Developer</span>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-normal font-sora text-primary">Based In</span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sora text-primary">Canada.</span>
          </div>
        </div>

        <p className="text-base sm:text-lg font-normal font-sora text-secondary leading-6 mb-12 max-w-2xl">
            I am Karan Sidhu, a Master of Computer Science student at the University of Ottawa concentrating in Applied Artificial Intelligence, having previously earned a Bachelor of Science with a double major in Computer Science and Biology from the University of Alberta. I have hands-on experience in AI research, software development, and full-stack technologies, specializing in Python, Java, React, machine learning model fine-tuning, and database management.
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Your social buttons here, can extract separately if you want */}
            <button
                className="w-14 h-14 border-2 border-primary rounded flex items-center justify-center hover:bg-primary hover:bg-opacity-10 hover:text-white transition-all"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.3)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => window.open('https://www.linkedin.com/in/karan-sidhu-04116420b/', '_blank')}
                aria-label="LinkedIn"
            >
                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </button>

            <button
                className="w-14 h-14 border-2 border-primary rounded flex items-center justify-center hover:bg-primary hover:bg-opacity-10 hover:text-white transition-all"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.3)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => window.open('https://github.com/Karan0Sidhu', '_blank')}
                aria-label="GitHub"
            >
                <img src="/images/img_social_icons.svg" alt="GitHub" className="w-6 h-6" />
            </button>

            <button
                className="w-14 h-14 border-2 border-primary rounded flex items-center justify-center hover:bg-primary hover:bg-opacity-10 hover:text-white transition-all"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.3)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => { navigator.clipboard.writeText('karan02sidhu@gmail.com'); }}
                aria-label="Copy Email"
            >
                <img src="/images/img_social_icons_black_900.svg" alt="Copy Email" className="w-6 h-6" />
            </button>

            <button
                className="w-14 h-14 border-2 border-primary rounded flex items-center justify-center hover:bg-primary hover:bg-opacity-10 hover:text-white transition-all"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.3)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => { navigator.clipboard.writeText('780-782-0840'); }}
                aria-label="Copy Phone Number"
            >
                <img src="/images/img_group_3.svg" alt="Copy Phone" className="w-6 h-6" />
            </button>
        </div>
      </div>

      {/* Right image container */}
      <div className="flex-1 flex justify-center md:justify-end w-full max-w-md sm:max-w-lg md:max-w-xl">
        <img
          src="/images/img_banner.svg"
          alt="Karan Sidhu"
          className="max-w-full h-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
}
