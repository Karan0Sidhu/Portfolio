import { useState } from "react";
import Button from "@/components/ui/Button"; // or wherever your Button lives

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white px-4 sm:px-8 md:px-16 lg:px-28 py-4 flex justify-between items-center z-50 shadow-sm">
      {/* Logo & Name */}
      <div 
        onClick={scrollToTop} 
        className="flex items-center gap-3 cursor-pointer group"
      >
        <img src="/images/KSLogo.svg" alt="Logo" className="w-10 h-10" />
        <span className="text-lg sm:text-xl font-bold font-sora text-primary capitalize group-hover:opacity-80 transition-opacity">
          Karan Sidhu
        </span>
      </div>

      {/* Hamburger */}
      <button
        className="xl:hidden focus:outline-none"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Nav */}
      <nav className="hidden xl:flex items-center gap-6 lg:gap-8">
        <HeaderLinks onNavigate={handleScrollToSection} />
      </nav>

      {/* Resume Button */}
      <Button
        className="hidden xl:flex bg-primary text-white px-4 py-2 rounded items-center gap-2"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "resume.pdf";
          link.download = "Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        <span className="text-base sm:text-lg font-semibold font-sora">Resume</span>
        <img src="/images/img_download.svg" alt="Download" className="w-4 h-4 sm:w-5 sm:h-5" />
      </Button>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-start gap-4 p-6 xl:hidden z-40">
          <HeaderLinks mobile onNavigate={handleScrollToSection} />
          <Button
            className="bg-primary text-white px-4 py-2 rounded flex items-center gap-2 w-full justify-center"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "resume.pdf";
              link.download = "Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              setMobileMenuOpen(false);
            }}
          >
            <span className="font-semibold font-sora">Resume</span>
            <img src="/images/img_download.svg" alt="Download" className="w-4 h-4" />
          </Button>
        </div>
      )}
    </header>
  );
}

function HeaderLinks({ mobile = false, onNavigate }) {
  const classes =
    "text-base font-semibold font-sora text-primary capitalize hover:text-accent transition-colors cursor-pointer";
  const spacing = mobile ? "block w-full py-2" : "";

  return (
    <>
      <a href="#about" onClick={(e) => onNavigate(e, "about")} className={`${classes} ${spacing}`}>About Me</a>
      <a href="#skills" onClick={(e) => onNavigate(e, "skills")} className={`${classes} ${spacing}`}>Skills</a>
      <a href="#experience" onClick={(e) => onNavigate(e, "experience")} className={`${classes} ${spacing}`}>Experience</a>
      <a href="#projects" onClick={(e) => onNavigate(e, "projects")} className={`${classes} ${spacing}`}>Projects</a>
      <a href="#chatbot" onClick={(e) => onNavigate(e, "chatbot")} className={`${classes} ${spacing}`}>Chatbot</a>
      <a href="#contact" onClick={(e) => onNavigate(e, "contact")} className={`${classes} ${spacing}`}>Contact Me</a>
    </>
  );
}