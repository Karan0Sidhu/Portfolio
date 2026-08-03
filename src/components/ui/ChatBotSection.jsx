// components/sections/ChatbotSection.jsx
import React from 'react';

const ChatbotSection = ({
  StartChat,
  allMessages,
  chatMessage,
  setChatMessage,
  handleChatSubmit,
  chatBotOptionClick1,
  chatBotOptionClick2,
  chatBotOptionClick3,
  loading,
}) => {
  return (
    <section id="chatbot" className="bg-background py-16 w-full">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="bg-background border-2 border-black rounded-3xl p-6 md:p-10 shadow-xl w-full">
          {!StartChat ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Welcome / Context Filler */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs uppercase tracking-widest text-primary font-bold font-sora">Karan Sidhu's AI Assistant</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold font-sora text-primary">
                  Ask me anything about Karan.
                </h3>
                <p className="text-sm md:text-base font-inter text-secondary leading-relaxed">
                  Explore his academic background in Computer Science & Applied AI, professional experience, and technical projects instantly using the quick prompts or typing your own question.
                </p>
              </div>

              {/* Right Column: Option Cards */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {[
                  { label: "What Projects has Karan Sidhu done?", onClick: chatBotOptionClick1 },
                  { label: "Tell Me About Karan Sidhu?", onClick: chatBotOptionClick2 },
                  { label: "What is Karan Sidhu's experience?", onClick: chatBotOptionClick3 },
                ].map((option, index) => (
                  <div
                    key={index}
                    onClick={option.onClick}
                    className="bg-background border-2 border-black rounded-2xl p-4 md:p-5 cursor-pointer hover:bg-primary/10 transition-all text-center shadow-sm group"
                  >
                    <p className="text-sm md:text-base font-sora text-primary font-bold group-hover:scale-[1.01] transition-transform">
                      {option.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <section className="bg-background border-2 border-black rounded-2xl custom-scrollbar overflow-y-scroll h-[500px] p-4 mb-6">
              <div className="space-y-4">
                {allMessages.map((message, index) => (
                  <div
                    key={`message-${index}`}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`${
                        message.sender === 'user'
                          ? 'bg-primary text-white rounded-br-none'
                          : 'bg-background text-primary border-2 border-black rounded-bl-none'
                      } px-5 py-3.5 rounded-2xl max-w-[80%] font-sora shadow-sm`}
                    >
                      <p className="text-sm md:text-base font-inter leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-background text-primary border-2 border-black px-5 py-3.5 rounded-2xl rounded-bl-none shadow-sm">
                      <p className="text-sm md:text-base font-inter animate-pulse font-semibold">Thinking...</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          <div className="mt-6">
            <form onSubmit={handleChatSubmit} className="flex items-center gap-3">
              <input
                type="text"
                placeholder={loading ? "AI is replying..." : "Type your message..."}
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                disabled={loading}
                className="flex-1 bg-background border-2 border-black rounded-2xl px-5 py-4 text-primary text-sm md:text-base font-inter placeholder-secondary outline-none focus:border-primary disabled:opacity-50 shadow-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className={`bg-primary border-2 border-black rounded-2xl px-6 py-4 text-white font-bold font-sora text-sm md:text-base transition-all shadow-sm flex items-center justify-center shrink-0 ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'
                }`}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;