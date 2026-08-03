// components/sections/HeroSection.jsx
import { Typewriter } from "react-simple-typewriter";
import { useState, useRef, useEffect } from "react";

export default function HeroSection({
  jobTitles,
  StartChat,
  allMessages = [],
  chatMessage = "",
  setChatMessage,
  handleChatSubmit,
  chatBotOptionClick1,
  chatBotOptionClick2,
  chatBotOptionClick3,
  loading,
}) {
  const [localInput, setLocalInput] = useState("");
  const chatScrollRef = useRef(null);

  // Sync with parent props if provided, otherwise use local state fallback
  const activeMessage = chatMessage !== undefined ? chatMessage : localInput;
  const setActiveMessage = setChatMessage || setLocalInput;

  const activeMessages = allMessages.length > 0 ? allMessages : [
    { sender: "bot", text: "Hi! Ask me anything about Karan's background or projects." }
  ];

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [activeMessages, loading]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (handleChatSubmit) {
      handleChatSubmit(e);
    } else {
      if (!localInput.trim() || loading) return;
      setLocalInput("");
    }
  };

  const handleInputChange = (e) => {
    setActiveMessage(e.target.value);
  };

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
      {/* Left text container */}
      <div className="flex-1 max-w-4xl min-w-0">
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
            <button
                type="button"
                className="w-14 h-14 border-2 border-primary rounded flex items-center justify-center hover:bg-primary hover:bg-opacity-10 hover:text-white transition-all flex-shrink-0"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.3)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => window.open('https://www.linkedin.com/in/karan-sidhu-04116420b/', '_blank')}
                aria-label="LinkedIn"
            >
                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </button>

            <button
                type="button"
                className="w-14 h-14 border-2 border-primary rounded flex items-center justify-center hover:bg-primary hover:bg-opacity-10 hover:text-white transition-all flex-shrink-0"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.3)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => window.open('https://github.com/Karan0Sidhu', '_blank')}
                aria-label="GitHub"
            >
                <img src="/images/img_social_icons.svg" alt="GitHub" className="w-6 h-6" />
            </button>

            <button
                type="button"
                className="w-14 h-14 border-2 border-primary rounded flex items-center justify-center hover:bg-primary hover:bg-opacity-10 hover:text-white transition-all flex-shrink-0"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.3)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => { navigator.clipboard.writeText('karan02sidhu@gmail.com'); }}
                aria-label="Copy Email"
            >
                <img src="/images/img_social_icons_black_900.svg" alt="Copy Email" className="w-6 h-6" />
            </button>
            <button
                type="button"
                className="w-14 h-14 border-2 border-primary rounded flex items-center justify-center hover:bg-primary hover:bg-opacity-10 hover:text-white transition-all flex-shrink-0"
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

      {/* Right container: Highlights & Integrated Chatbot Widget */}
      <div className="flex-1 flex flex-col gap-6 justify-center md:justify-end w-full max-w-md sm:max-w-lg md:max-w-xl min-w-0">
        
        {/* Education & Experience Highlight Card */}
        <div className="w-full bg-background border-2 border-black rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col gap-4 box-border">
          <div className="flex items-center justify-between border-b border-black pb-3">
            <span className="text-xs uppercase tracking-widest text-primary font-bold font-sora">Recent Highlights</span>
            <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-sora font-semibold border border-black">2026 Focus</span>
          </div>

          <div className="space-y-3">
            <div 
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById("robogarden-experience");
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="block p-3 sm:p-3.5 rounded-xl border border-black bg-background hover:bg-primary/5 transition-all cursor-pointer box-border"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1 sm:gap-0">
                <h4 className="font-bold text-primary text-sm font-sora underline decoration-primary/50">UI/UX Developer Intern</h4>
                <span className="text-xs text-secondary flex-shrink-0">July 2026 - Present</span>
              </div>
              <p className="text-xs text-secondary mt-1">RoboGarden • Full-stack development & interface design</p>
            </div>

            <div 
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById("uottawa-experience");
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="block p-3 sm:p-3.5 rounded-xl border border-black bg-background hover:bg-primary/5 transition-all cursor-pointer box-border"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1 sm:gap-0">
                <h4 className="font-bold text-primary text-sm font-sora underline decoration-primary/50">M.Sc. in Computer Science (Applied AI)</h4>
                <span className="text-xs text-secondary flex-shrink-0">Starting Sept 2026</span>
              </div>
              <p className="text-xs text-secondary mt-1">University of Ottawa • B.Sc. from UAlberta (2025)</p>
            </div>
          </div>
        </div>

        {/* Chatbot Widget Container */}
        <div className="w-full bg-background border-2 border-black rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col h-80 box-border">
          <div className="flex items-center justify-between border-b border-black pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
              <span className="text-xs uppercase tracking-widest text-primary font-bold font-sora">Ask Karan's AI Bot</span>
            </div>
          </div>

          {!StartChat && chatBotOptionClick1 && chatBotOptionClick2 && chatBotOptionClick3 ? (
            <div className="flex-1 flex flex-col justify-center gap-2.5 overflow-y-auto pr-1">
              {[
                { label: "What Projects has Karan done?", onClick: chatBotOptionClick1 },
                { label: "Tell Me About Karan Sidhu?", onClick: chatBotOptionClick2 },
                { label: "What is Karan's experience?", onClick: chatBotOptionClick3 },
              ].map((option, index) => (
                <div
                  key={index}
                  onClick={option.onClick}
                  className="bg-background border border-black rounded-xl p-2.5 cursor-pointer hover:bg-primary/10 transition-all text-center group box-border"
                >
                  <p className="text-xs font-sora text-primary font-bold">{option.label}</p>
                </div>
              ))}
            </div>
          ) : (
            <div ref={chatScrollRef} className="flex-1 overflow-y-auto pr-1 space-y-2.5 text-xs mb-3 scrollbar-thin">
              {activeMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl font-sora break-words ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-background text-primary border border-black rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-background text-primary border border-black px-3 py-2 rounded-xl rounded-bl-none text-xs italic font-semibold">
                    Thinking...
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Chat Input Form */}
          <form onSubmit={onSubmitHandler} className="flex gap-2 mt-auto">
            <input
              type="text"
              value={activeMessage}
              onChange={handleInputChange}
              disabled={loading}
              placeholder={loading ? "AI is replying..." : "Ask about my experience..."}
              className="flex-1 min-w-0 bg-background border-2 border-black rounded-xl px-3 py-2.5 text-xs text-primary placeholder-secondary focus:outline-none focus:border-primary font-sora disabled:opacity-50 shadow-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className={`bg-primary border-2 border-black text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all font-sora shadow-sm flex-shrink-0 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'
              }`}
            >
              Send
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}