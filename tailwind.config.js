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
      }
    },
  },
  plugins: [],
};
