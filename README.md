# React + Vite + Tailwind CSS Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**, featuring an AI-powered portfolio assistant, interactive UI components, and serverless backend integration using Netlify Functions.

## 🚀 Features

- ⚛️ **React 18** — Modern component-based UI development
- ⚡ **Vite** — Fast development server and optimized production builds
- 🎨 **Tailwind CSS** — Utility-first styling with responsive design
- 🧭 **React Router** — Client-side routing
- 🤖 **AI Portfolio Assistant** — Interactive chatbot for answering portfolio-related questions
- ☁️ **Netlify Functions** — Serverless backend API integration
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices

---

## 📋 Prerequisites

- Node.js **18.x** or later
- npm or Yarn

---

## 🛠️ Installation

### 1. Install dependencies

```bash
npm install

# or

yarn install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
HF_API_TOKEN=your_huggingface_api_token
```

### 3. Start the development server

```bash
npm run dev
```

---

## 📁 Project Structure

```text
.
├── netlify/
│   └── functions/
│       └── question-answer.js
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   ├── Routes.jsx
│   └── main.jsx
├── server.js
├── index.html
├── package.json
├── netlify.toml
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🎨 Styling

This project uses **Tailwind CSS** with:

- Utility-first styling
- Responsive layouts
- Custom theme configuration
- PostCSS & Autoprefixer integration

---

## 📦 Deployment

### Netlify

This project is configured for deployment using **Netlify Functions**.

1. Connect the repository to Netlify.
2. Set the build command:

```bash
npm run build
```

3. Set the publish directory:

```text
dist
```

4. Add the required environment variables in **Site Settings → Environment Variables**.

### Preview a production build locally

```bash
npm run build
npm run preview
```

---

## 🙏 Acknowledgments

- Built with **React**, **Vite**, and **Tailwind CSS**
- Powered by **Netlify Functions**
- AI integration using the **Hugging Face API**

### Design Assets

- **Figma Design:** https://www.figma.com/design/HCNuVYJqhMnV61kpoCtH6u/Solvinger---The-Ai-chat-bot--Community-?node-id=1-7&t=x5yBunoSja4Gm0iG-0
- **Icons:** Community Figma icon libraries