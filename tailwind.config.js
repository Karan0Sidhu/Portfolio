module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px', 
      xl: '1280px',
      },
      colors: {
        background: {
          primary: "var(--bg-primary)",
          accent: "var(--bg-accent)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          overlay: "var(--bg-overlay)",
          muted: "var(--bg-muted)",
          white: "var(--bg-white)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
          white: "var(--text-white)"
        },
        button: {
          background: "var(--button-bg)"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif']
      }
    }
  },
  plugins: []
};