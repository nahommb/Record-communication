/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // adjust if you use React/Vite
  ],
  theme: {
    extend: {
      colors: {
        blueAccent: '#4676EC', // Custom blue accent color
        orange: '#F2A618',
        darkBlue:'#020594', // Custom orange color
    },
  },
  plugins: [],
}
}
