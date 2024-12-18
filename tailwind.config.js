/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        sunnyImg: "url('../app/assets/sunny.jpg')",
        cloudyImg: "url('../app/assets/cloudy.jpeg')",
        dayImg: "url('../app/assets/day.jpg')",
        nightImg: "url('../app/assets/night.jpg')",
        partiallyCloudyImg: "url('../app/assets/partiallyCloudy.jpeg')",
        rainImg: "url('../app/assets/rain.jpeg')",
        snowImg: "url('../app/assets/snow.jpg')",
        thunderStormImg: "url('../app/assets/thunderstorm.jpg')",
        mistImg: "url('../app/assets/mist.jpeg')",
        defaultImg: "url('../app/assets/default.jpeg')",
        blackOverlay:"linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 30%)",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      }, ['responsive', 'hover']);
    },
  ],
};
