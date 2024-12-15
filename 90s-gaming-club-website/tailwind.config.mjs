/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39ff14',
        'neon-blue': '#1fb6ff',
        'neon-purple': '#8b00ff',
      },
      fontFamily: {
        retro: ['Press Start 2P'],
      },
    },
  },
  plugins: [],
};
