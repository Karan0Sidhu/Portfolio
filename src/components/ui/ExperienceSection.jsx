import React from "react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-primary py-12 sm:py-16 lg:py-20">
      <div className="px-4 sm:px-8 md:px-16 lg:px-28">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-normal font-sora text-white">
              My
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sora text-white">
              Experience
            </span>
          </div>
        </div>

        {/* Experience 1: RoboGarden */}
        <a
          id="robogarden-experience"
          href="https://www.robogarden.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-secondary rounded-lg p-6 sm:p-8 mb-8 hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6 hover:opacity-80 transition-opacity">
            <img
              src="/images/img_robogarden.png"
              alt="RoboGarden"
              className="w-12 h-12 rounded-lg flex-shrink-0 object-contain"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/img_google.svg"
                    alt="Company Icon"
                    className="w-8 h-8"
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold font-sora text-white">
                    UI/UX Developer at RoboGarden
                  </h3>
                </div>
                <span className="text-sm sm:text-base font-semibold font-sora text-light whitespace-nowrap">
                  Jul 2026 – Present
                </span>
              </div>
              <p className="text-sm sm:text-base font-normal font-sora text-light leading-6">
                Authored technical review reports for 10 online courses (8 CodingVille, 2 UpSkilling), evaluating course design, quiz UX, and content structure. Applied UI/UX principles while building proficiency in Angular and modern full-stack web development. Designed high-fidelity Figma prototypes for an interactive table-editing interface with a focus on usability and accessibility. Developed a pagination table application with full CRUD functionality. Conducted competitive UX research to inform product design decisions. Created user flows and wireframes in Figma for the RoadMap project, improving navigation and learning progression. Collaborated with stakeholders to refine requirements and finalize designs, while supporting front-end developers to ensure design consistency.
              </p>
            </div>
          </div>
        </a>

        {/* Experience 2: Bless Rhoo Day Care */}
        <a
          href="https://blessrhoodaycare.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-secondary rounded-lg p-6 sm:p-8 mb-8 hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6 hover:opacity-80 transition-opacity">
            <img
              src="/images/img_blessrhoo.png"
              alt="Bless Rhoo Day Care"
              className="w-12 h-12 rounded-lg flex-shrink-0 object-contain"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/img_google.svg"
                    alt="Company Icon"
                    className="w-8 h-8"
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold font-sora text-white">
                    Website/Business Developer at Bless Rhoo Day Care
                  </h3>
                </div>
                <span className="text-sm sm:text-base font-semibold font-sora text-light whitespace-nowrap">
                  Apr 2026 – Jun 2026
                </span>
              </div>
              <p className="text-sm sm:text-base font-normal font-sora text-light leading-6">
                Designed and deployed a responsive business website using React, TypeScript, and Tailwind CSS to modernize the brand's digital identity. Integrated interactive Google Maps within the site to enhance local visibility, simplify location finding for prospective clients, and improve user engagement. Engineered a seamless, backend-free lead generation pipeline by integrating custom form validation and email handling via Formspree. Increased local discoverability by architecting and launching the business's Google Maps/Search footprint through a fully optimized Google Business Profile. Streamlined business operations by implementing professional email infrastructure and providing end-user training on modern document management workflows. Managed the end-to-end technical lifecycle, from requirements gathering with stakeholders to production deployment on modern hosting platforms.
              </p>
            </div>
          </div>
        </a>

        {/* Experience 3: WishartLab */}
        <a 
          href="https://www.wishartlab.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-secondary rounded-lg p-6 sm:p-8 mb-8 hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6 hover:opacity-80 transition-opacity">
            <img
              src="/images/img_image_1.png"
              alt="WishartLab"
              className="w-12 h-12 rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/img_google.svg"
                    alt="Company"
                    className="w-8 h-8"
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold font-sora text-white">
                    Artificial Intelligence researcher at WishartLab
                  </h3>
                </div>
                <span className="text-sm sm:text-base font-semibold font-sora text-light whitespace-nowrap">
                  May 2024 – Sep 2024
                </span>
              </div>
              <p className="text-sm sm:text-base font-normal font-sora text-light leading-6">
                At WishartLab, I led the development of AI pipelines to extract
                triplets from research articles, significantly enhancing
                knowledge graph accuracy for chatbot-driven systems. I
                fine-tuned HuggingFace models, improving relation extraction
                accuracy by 14.6%, and built high-quality datasets with refined
                evaluation metrics to strengthen model assessment. I also
                engineered a lightweight, cost-effective alternative to
                AppSignal for multi-server performance monitoring and automated
                anomaly detection. Additionally, I designed custom chatbots to
                streamline grant applications and collaborated with
                cross-functional teams, ensuring alignment with project
                milestones and research goals.
              </p>
            </div>
          </div>
        </a>

        {/* Education 1: University of Ottawa */}
        
        
        <a
        id="uottawa-experience"
          href="https://www.uottawa.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-secondary rounded-lg p-6 sm:p-8 mb-8 hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6 hover:opacity-80 transition-opacity">
            <div className="w-14 h-14 flex items-center justify-center">
              <img src="/images/img_uottawa.png" alt="University of Ottawa" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/img_google.svg"
                    alt="University"
                    className="w-8 h-8"
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold font-sora text-white">
                    Master of Computer Science - Concentration in Applied Artificial Intelligence
                  </h3>
                </div>
                <span className="text-sm sm:text-base font-semibold font-sora text-light whitespace-nowrap">
                  Sep 2026 - Expected 2028
                </span>
              </div>
              <p className="text-sm sm:text-base font-normal font-sora text-light leading-6">
                Enrolling as a graduate student focusing on advanced concepts in applied artificial intelligence, intelligent systems, and cutting-edge software engineering paradigms.
              </p>
            </div>
          </div>
        </a>

        {/* Education 2: University of Alberta */}
        <a
          href="https://www.ualberta.ca/en/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-secondary rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6 hover:opacity-80 transition-opacity">
            <div className="w-14 h-14 flex items-center justify-center">
              <img src="/images/img_image_772.png" alt="University" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/img_google.svg"
                    alt="Company"
                    className="w-8 h-8"
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold font-sora text-white">
                    Bachelor of Science - Double Major in Computer Science and
                    Biology
                  </h3>
                </div>
                <span className="text-sm sm:text-base font-semibold font-sora text-light whitespace-nowrap">
                  Sept 2020 - Jun 2025
                </span>
              </div>
              <p className="text-sm sm:text-base font-normal font-sora text-light leading-6">
                During my studies, I gained a strong foundation in artificial
                intelligence, software engineering, and bioinformatics through
                coursework and hands-on projects. In CMPUT 261, I explored core
                AI concepts including search algorithms, knowledge
                representation, and neural networks. CMPUT 461 deepened my
                skills in natural language processing, balancing classical and
                machine learning-based methods to analyze and process human
                language. Through BIOIN 401, I worked on team-based
                bioinformatics projects, developing novel tools to address
                real-world biological data challenges. I also strengthened my
                programming and algorithmic thinking in CMPUT 204 (Algorithms
                I), CMPUT 201 (Practical Programming with C and Unix), and
                CMPUT 301 (Software Engineering), where I gained experience in
                object-oriented design, version control, testing, and software
                architecture.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}