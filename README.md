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
CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
CLOUDFLARE_API_TOKEN=your_cloudflare_workers_ai_token
```

Get both values from **Cloudflare Dashboard → Workers AI → Use REST API**.
The token should be created with the Workers AI permissions shown there.

### 3. Start the development server

```bash
npm.cmd run dev
```

Open the Vite URL shown in the terminal. The development command also starts
the Express API server, which is required for chatbot requests.

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

4. Add `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` in
   **Site configuration → Environment variables**, then redeploy.

Workers AI's Free plan currently includes 10,000 Neurons per day. Once that
allowance is reached, requests stop until the daily reset.

### Preview a production build locally

```bash
npm.cmd run build
npm.cmd run start
```

Open `http://localhost:3000`. `npm.cmd run preview` serves only the static
frontend and does not run the chatbot API.

---

## AI Use Disclosure

Claude, Google Gemini, ChatGPT, and GitHub Copilot were used as AI assistants
during the development and updating of this website. They supported brainstorming,
drafting and refining code and portfolio content, troubleshooting, and documentation.
AI-generated suggestions were reviewed and tested, and the site owner is responsible
for the final content and implementation.

---

## 🙏 Acknowledgments

- Built with **React**, **Vite**, and **Tailwind CSS**
- Powered by **Netlify Functions**
- Chatbot inference using **Cloudflare Workers AI**

### Design Assets

- **Figma Design:** https://www.figma.com/design/HCNuVYJqhMnV61kpoCtH6u/Solvinger---The-Ai-chat-bot--Community-?node-id=1-7&t=x5yBunoSja4Gm0iG-0
- **Icons:** Community Figma icon libraries