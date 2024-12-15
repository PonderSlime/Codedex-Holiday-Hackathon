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
        retro: ['"Press Start 2P"', 'system-ui'],
      },
      backgroundImage: {
        'game-companies': "url('https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/327095559_894178234966401_1002960057092778272_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_ohc=GGHdVNgt8-IQ7kNvgEjibNt&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=AdgkLku9zNpB8JJLAcXmshg&oh=00_AYAl2ZYgKKkYLpUe6-fO-wI3udAgYV3ZilRTzQrRJTv-SQ&oe=6764CAB3')"
      }
    },
  },
  plugins: [],
};
