// app/page.js (or pages/index.js)
"use client";
import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';
import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import SkillsSection from '@/components/ui/SkillsSections';
import ExperienceSection from '@/components/ui/ExperienceSection';
import AboutSection from '@/components/ui/AboutSection';
import ProjectsSection from '@/components/ui/ProjectSection';
import ChatbotSection from '@/components/ui/ChatBotSection';
import ContactSection from '@/components/ui/ContactSection';
import axios from 'axios';

const Home = () => {useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  
  const [StartChat, setStartChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [oldChat, setOldChat] = useState([]);
  const [oldChatbotChats, setOldChatbotChats] = useState([]);
  const [loading, setLoading] = useState(false);

  const allMessages = [];
  const maxLength = Math.max(oldChat.length, oldChatbotChats.length);
  
  // Interleave messages[cite: 1]
  for (let i = 0; i < maxLength; i++) {
    if (oldChat[i]) {
      allMessages.push({ text: oldChat[i], sender: 'user' });
    }
    if (oldChatbotChats[i]) {
      allMessages.push({ text: oldChatbotChats[i], sender: 'bot' });
    }
  }

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatMessage.trim() || loading) return;

    const currentMessage = chatMessage;
    setStartChat(true);
    setOldChat(prev => [...prev, currentMessage]);
    setChatMessage('');
    setLoading(true);

    const API_URL = import.meta.env.DEV ? 'http://localhost:3000' : '';

    try {
      const response = await axios.post(`${API_URL}/api/question-answer`, {
        input: currentMessage
      });
      setOldChatbotChats(prev => [...prev, response.data.choices[0].message.content]);
    } catch (err) {
      console.error("❌ Error:", err);
      setOldChatbotChats(prev => [...prev, `Error: ${err.message}`]);
    } finally {
      setLoading(false);
    }
  };

  const chatBotOptionClick1 = () => {
    setStartChat(true);
    setOldChat(['What Projects has Karan Sidhu done?']);
    setOldChatbotChats(prev => [...prev, `Karan Sidhu has worked on several projects that showcase his skills in AI, full-stack development, and research. Here are some of the projects he has completed: 1. ChemFont Fact Finder: Designed and implemented a pipeline to extract triplets from research articles, improving knowledge graph accuracy and refining evaluation metrics. 2. AppSignal-Replicate: Engineered a lightweight, free alternative to AppSignal for performance monitoring and error tracking across multi-server environments with automated log analysis over SSH. 3. Event QR Check-in App: Designed and developed an Android-based event management app using Android Studio and Firebase with QR code generation and scanning features. 4. Portfolio Chatbot Website: Built a modern, responsive AI chatbot website using React 18, Vite, and Tailwind CSS with dynamic routing and modular architecture.`]);
    setChatMessage('');
  };

  const chatBotOptionClick2 = () => {
    setStartChat(true);
    setOldChat(['Tell Me About Karan Sidhu?']);
    setOldChatbotChats(prev => [...prev, `Karan Sidhu is a Master of Computer Science student at the University of Ottawa concentrating in Applied Artificial Intelligence, having previously earned a Bachelor of Science with a double major in Computer Science and Biology from the University of Alberta. He has hands-on professional experience as a UI/UX Developer at RoboGarden, a Website/Business Developer at Bless Rhoo Day Care, and an AI Researcher at TMIC Wishart Node. His technical expertise spans Python, Java, ReactJS, Angular, HTML5, CSS3, C, SQL, MongoDB, Firebase, Neo4j, PyTorch, TensorFlow, Hugging Face, and Figma.`]);
    setChatMessage('');
  };

  const chatBotOptionClick3 = () => {
    setStartChat(true);
    setOldChat(["What is Karan Sidhu's experience?"]);
    setOldChatbotChats(prev => [...prev, `Karan Sidhu has professional experience across development, AI, and research: 
1. UI/UX Developer at RoboGarden (Jul 2026 – Present): Authored technical course reviews, designed high-fidelity Figma prototypes for interactive table-editing interfaces, built a pagination table application with full CRUD functionality, and created user flows for the RoadMap project.
2. Website/Business Developer at BlessRhooDayCare (Apr 2026 – Jun 2026): Designed and deployed a responsive business website using React, TypeScript, and Tailwind CSS with integrated Google Maps and custom form validation.
3. AI/Software Developer at TMIC Wishart Node (May 2024 – Sep 2024): Built an AI pipeline to extract triplets from research articles for knowledge graph construction, fine-tuned HuggingFace models (improving relation extraction accuracy by 14.6%), engineered a performance monitoring alternative to AppSignal, and designed custom GPT chatbots.`]);
    setChatMessage('');
  };

  const skills = [
    { name: 'JavaScript', icon: '/images/img_iconjavscript.svg' },
    { name: 'TypeScript', icon: '/images/img_logos_typescript.svg' },
    { name: 'Python', icon: '/images/img_logos_pythonplain.svg' },
    { name: 'Java', icon: '/images/img_logos_javaplain.svg' },
    { name: 'C', icon: '/images/img_logos_cplain.svg' },
    { name: 'React', icon: '/images/img_logos_reactoriginal.svg' },
    { name: 'Angular', icon: '/images/img_logos_angular.svg' },
    { name: 'Tailwind CSS', icon: '/images/img_logos_tailwind.svg' },
    { name: 'HTML5', icon: '/images/img_logos_html5plain.svg' },
    { name: 'CSS3', icon: '/images/img_logos_css3plain.svg' },
    { name: 'Node.js', icon: '/images/img_logos_nodejs.svg' },
    { name: 'PyTorch', icon: '/images/img_logos_pytorch.svg' },
    { name: 'TensorFlow', icon: '/images/img_logos_tensorflow.svg' },
    { name: 'Hugging Face', icon: '/images/img_logos_huggingface.svg' },
    { name: 'Jupyter Notebooks', icon: '/images/img_logos_jupyterplainwordmark.svg' },
    { name: 'SQLite', icon: '/images/img_logos_sqliteplain.svg' },
    { name: 'MongoDB', icon: '/images/img_logos_mongodbplain.svg' },
    { name: 'Firebase', icon: '/images/img_logos_firebaseplain.svg' },
    { name: 'Neo4j', icon: '/images/img_logos_neo4jplain.svg' },
    { name: 'Git', icon: '/images/img_icongit.svg' },
    { name: 'Docker', icon: '/images/img_logos_dockerplain.svg' },
    { name: 'Figma', icon: '/images/img_logos_figma.svg' },
    { name: 'Linux / Bash', icon: '/images/img_logos_linux.svg' },
    { name: 'Android Studio', icon: '/images/img_logos_androidplain.svg' },
  ];

  const projects = [
    {
      id: '01',
      title: 'ChemFont Fact Finder',
      description: 'Led the development of a text mining chatbot for the Bioin 401 project & research internship, focused on extracting structured knowledge from scientific literature. Designed a robust pipeline to extract subject–predicate–object triplets from research articles, enhancing the accuracy of the chatbot\'s knowledge graph.',
      image: '/images/img_image.png',
      repolink: 'https://github.com/Karan0Sidhu/FactFinder'
    },
    {
      id: '02',
      title: 'AppSignal-Replicate',
      description: 'Developed a lightweight, cost-effective alternative to AppSignal for performance monitoring and error tracking in multi-server environments. The project automated log analysis over SSH, enabling real-time anomaly detection and proactive alerts via email.',
      image: '/images/img_image_397x530.png',
      repolink: 'https://github.com/Karan0Sidhu/AppSignalReplicate'
    },
    {
      id: '03',
      title: 'Event QR Check-in App',
      description: 'Designed and developed an Android-based event management app using Android Studio and Firebase, streamlining check-ins for attendees, organizers, and administrators. Implemented QR code generation and scanning features integrated with real-time database operations.',
      image: '/images/img_image_456x530.png',
      repolink: 'https://github.com/CMPUT301W24T47/automatic-octo-fishstick'
    },
    {
      id: '04',
      title: 'Portfolio Chatbot Website',
      description: 'Built a modern, responsive AI chatbot website using React 18, Vite, and Tailwind CSS for fast performance and a seamless user experience. Integrated dynamic routing with React Router and modular architecture with reusable components.',
      image: '/images/KSLogo.svg',
      repolink: 'https://github.com/Karan0Sidhu/Portfolio'
    }
  ];

  const jobTitles = ['Software', 'UI/UX', 'Artificial Intelligence', 'Website', 'Back-end', 'Front-end', 'Full-stack', 'Machine Learning', 'Application', 'Research', 'Android', 'Tech', 'DevOps', 'Mobile'];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />

      <HeroSection 
        jobTitles={jobTitles}
        StartChat={StartChat}
        allMessages={allMessages}
        chatMessage={chatMessage}
        setChatMessage={setChatMessage}
        handleChatSubmit={handleChatSubmit}
        chatBotOptionClick1={chatBotOptionClick1}
        chatBotOptionClick2={chatBotOptionClick2}
        chatBotOptionClick3={chatBotOptionClick3}
        loading={loading}
      />

      <SkillsSection skills={skills} />
      <ExperienceSection />
      <AboutSection />
      <ProjectsSection projects={projects} />

      <ChatbotSection
        StartChat={StartChat}
        allMessages={allMessages}
        chatMessage={chatMessage}
        setChatMessage={setChatMessage}
        handleChatSubmit={handleChatSubmit}
        chatBotOptionClick1={chatBotOptionClick1}
        chatBotOptionClick2={chatBotOptionClick2}
        chatBotOptionClick3={chatBotOptionClick3}
        loading={loading}
      />

      <ContactSection />
    </div>
  );
};

export default Home;