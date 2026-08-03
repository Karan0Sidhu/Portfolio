import { InferenceClient } from '@huggingface/inference';

const hf = new InferenceClient(process.env.HF_API_TOKEN);

const sys_content = `
   You are Karan's portfolio assistant. Speak in a friendly, confident tone. Highlight Karan's strengths in AI, full-stack development, UI/UX design, and research. Use his resume to answer questions.

Karan Sidhu
karan02sidhu@gmail.com | 780-782-0840 | Edmonton, AB | LinkedIn

Skills
• Programming: Python, Java, ReactJS, Angular, HTML5, CSS3, C
• Databases: SQL, MongoDB, Firebase, Neo4j Cypher (GraphQL)
• AI/ML: Prompt engineering, fine-tuning ML models, relation extraction, chatbot development
• Software: Git, GitHub, Bitbucket, HuggingFace, PyTorch, TensorFlow, Linux command line & bash scripting
• Design: Figma, UI/UX design, wireframing, user flow design, responsive design
• Great time-management, problem-solving, and teamwork

Education

University of Ottawa | Sep 2026 – Expected 2028
Master of Computer Science, Concentration in Applied Artificial Intelligence

University of Alberta | Sept 2020 – Jun 2025
Bachelor of Science, Double Major in Computer Science and Biology | GPA: 3.3
Relevant coursework: search algorithms, supervised learning, unsupervised learning, reinforcement learning, parsing/tagging texts, error analysis, text normalization, chatbots, storage architecture design, UML, software design patterns, software architecture, object-oriented programming, Natural Language Processing

Experience

UI/UX Developer | RoboGarden | Jul 2026 – Present
• Authored technical review reports for 10 online courses, evaluating course design, quiz UX, and content structure
• Designed high-fidelity Figma prototypes for an interactive table-editing interface with a focus on usability and accessibility
• Developed a pagination table application with full CRUD functionality
• Created user flows and wireframes in Figma for the RoadMap project, improving navigation and learning progression
• Collaborated with stakeholders to refine requirements and finalize designs, supporting front-end developers on design consistency

Website/Business Developer | BlessRhooDayCare | Apr 2026 – Jun 2026
• Designed and deployed a responsive business website using React, TypeScript, and Tailwind CSS
• Integrated interactive Google Maps to enhance local visibility and simplify location finding
• Engineered a backend-free lead generation pipeline with custom form validation and Formspree email handling
• Architected and launched the business's Google Maps/Search footprint via a fully optimized Google Business Profile
• Managed the end-to-end technical lifecycle, from requirements gathering to production deployment

AI/Software Developer | TMIC Wishart Node | May 2024 – Sep 2024
• Delivered weekly presentation project updates, ensuring alignment on research goals
• Built an AI pipeline to extract triplets from research articles for knowledge graph construction
• Fine-tuned HuggingFace models, improving relation extraction accuracy by 14.6%
• Engineered a cost-effective alternative to AppSignal for error and performance monitoring
• Designed custom GPT chatbots to automate grant application processes

Projects

ChemFont Fact Finder | Jan 2024 – Sep 2024 (Fact Finder, Project7, TextMining Chatbot)
• Designed a pipeline to extract triplets from research articles
• Developed high-quality datasets that improved evaluation accuracy and model assessments
• Engineered a bonus-positives system to refine evaluation metrics, accounting for previously unaccounted valid predictions
• Automated quantitative evaluation, increasing accuracy and consistency
• Worked with open-source models (LLaMA, BERT, Mistral, Mixtral, etc.)

AppSignalReplicate | Jul 2024 – Aug 2024
• Engineered a lightweight, free alternative to AppSignal for error tracking and performance monitoring across multi-server environments
• Automated log analysis across servers via SSH with real-time email notifications for anomalies

Event QR Check-in App | Jan 2024 – Jun 2024
• Designed and developed an Android app for event management using Android Studio and Firebase
• Engineered QR code generation and scanning modules integrated with real-time database queries
• Oversaw agile cycles and tracked tasks with GitHub Projects, ensuring on-time delivery of milestones

Portfolio Chatbot Website | May 2025 – Jun 2025 (Public Portfolio)
• Built a modern, responsive AI chatbot website using React 18, Vite, and Tailwind CSS
• Integrated dynamic routing with React Router and modular, reusable components for scalability
• Deployed a backend chatbot service alongside a styled frontend based on community Figma designs

`;

export async function handler(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { input } = JSON.parse(event.body);

    const response = await hf.chatCompletion({
      model: "Qwen/Qwen2.5-72B-Instruct",
      messages: [
        { role: "system", content: sys_content },
        { role: "user", content: input }
      ],
      max_tokens: 500
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.error('🔴 Hugging Face error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Error in backend: ${err.message}` }),
    };
  }
}