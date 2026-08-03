```markdown
# React + Vite + Tailwind CSS Portfolio Project

A modern, responsive AI-powered portfolio and web application built using cutting-edge frontend technologies, featuring an integrated conversational assistant and a showcase of academic and professional milestones including experience at RoboGarden, TMIC Wishart Node, and graduate studies at the University of Ottawa[cite: 1, 2, 4, 6].

## 🚀 Features

* **React 18** - Modern React version with improved rendering and concurrent features


* **Vite** - Lightning-fast build tool and development server


* **Tailwind CSS** - Utility-first CSS framework with extensive customization


* **React Router** - Declarative routing for React applications


* **AI Chatbot Integration** - Intelligent portfolio assistant and interactive features


* **Netlify Serverless Deployment** - Fully integrated with Netlify Functions for seamless backend API routing



## 📋 Prerequisites

* Node.js (v18.x or higher)


* npm or yarn



---

## 🛠️ Installation & Setup

1. **Clone the repository and install dependencies:**
```bash
npm install
# or
yarn install


```

2. **Configure Environment Variables:**
Create a `.env` file in the root directory of your project and add your API tokens:

```env
HF_API_TOKEN=your_actual_huggingface_token_here


```

3. **Start the Development Environment:**
To run both Vite and the local development server concurrently:

```bash
npm run dev


```

---

## 📁 Project Structure

```
/
├── netlify/
│   └── functions/
│       └── question-answer.js  # Serverless backend handler for Netlify
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable UI components
│   ├── pages/                  # Page components
│   ├── styles/                 # Global styles and Tailwind configuration
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── Routes.jsx              # Application routes
├── server.js                   # Local Express development server
├── index.html                  # HTML template
├── package.json                # Project dependencies and scripts
├── netlify.toml                # Netlify build and functions routing configuration
├── postcss.config.js           # PostCSS configuration for Tailwind
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite configuration


```

---

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

* Utility-first approach for rapid development
* Custom theme configurations and responsive design utilities
* PostCSS and Autoprefixer integration

---

## 📦 Deployment

### Deploying to Netlify

This project is configured for seamless deployment on Netlify using **Netlify Functions** for backend routing:

1. Connect your repository to Netlify.


2. Ensure the build command is set to `npm run build` and the publish directory is set to `dist`.
3. Add your environment variables under **Site settings > Environment variables** in your Netlify dashboard.



To build and preview production bundles locally:

```bash
npm run build
npm run preview


```

---

## 🙏 Acknowledgments

* Built with [Rocket.new](https://rocket.new)
* Powered by React, Vite, and modern AI tooling
* Styled with Tailwind CSS

### Design Assets

* **Figma Design:** [Solvinger - The AI Chatbot](https://www.figma.com/design/HCNuVYJqhMnV61kpoCtH6u/Solvinger---The-Ai-chat-bot--Community-?node-id=1-7&t=x5yBunoSja4Gm0iG-0)

* **Icons:** Community Figma icon libraries

```

```