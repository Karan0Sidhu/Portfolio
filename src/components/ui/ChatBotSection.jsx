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
  loading, // Accept loading prop
}) => {
  return (
    <section id="chatbot" className="bg-white py-20">
      <div className="px-4 md:px-28">
        <div className="bg-tertiary rounded-[35px] p-4 md:p-8">
          {!StartChat ? (
            <div className="space-y-6">
              {[{
                label: "What Projects has Karan Sidhu done?",
                onClick: chatBotOptionClick1,
              }, {
                label: "Tell Me About Karan Sidhu?",
                onClick: chatBotOptionClick2,
              }, // Inside your ChatbotSection.jsx options array:
                {
                label: "What is Karan Sidhu's experience?",
                onClick: chatBotOptionClick3,
                }].map((option, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-[25px] border border-white/20 p-4 md:p-8 hover:bg-primary hover:bg-opacity-10"
                >
                  <div
                    className="bg-button rounded-lg p-4 md:p-6 cursor-pointer"
                    onClick={option.onClick}
                  >
                    <p className="text-xl md:text-3xl font-sora text-white text-center">
                      {option.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <section className="bg-secondary rounded-[25px] custom-scrollbar overflow-y-scroll h-[600px] px-4 py-2">
              <div className="space-y-4">
                {allMessages.map((message, index) => (
                  <div
                    key={`message-${index}`}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`${
                        message.sender === 'user'
                          ? 'bg-gray-500 text-white'
                          : 'bg-gray-200 text-black'
                      } p-4 rounded-lg max-w-[70%]`}
                    >
                      <p className="text-base font-inter">{message.text}</p>
                    </div>
                  </div>
                ))}
                {/* Optional: Show loading bubble while waiting */}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-black p-4 rounded-lg">
                      <p className="text-base font-inter animate-pulse">Thinking...</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          <div className="bg-overlay rounded-2xl border border-gray-500 p-4 md:p-6 shadow-lg mt-10">
            <form 
              onSubmit={handleChatSubmit}
              className="flex items-center gap-4"
            >
              <input
                type="text"
                placeholder={loading ? "AI is replying..." : "Type your message..."}
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                disabled={loading} // Disable text box while loading
                className="flex-1 bg-transparent text-muted text-base font-inter placeholder-muted outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading} // Disable button while loading
                className={`bg-accent border border-gray-400/50 rounded-2xl p-3 md:p-4 transition-colors ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                }`}
              >
                <img src="/images/img_send.svg" alt="Send" className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;