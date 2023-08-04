/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      TITULO: ["Abhaya Libre", "serif"], //titulo
      TEXTO: ["Nunito", "sans-serif"], //texto
      DESTAQUE: ["Space Mono", "monospace"], //destaque
    },
    extend: {
      colors: {
        NUMEN_ACCENT: "#2cb865",
        FIRE_BACKDROP: "#ff4444",
        AIR_BACKDROP: "#ffff22",
        EARTH_BACKDROP: "#2cb865",
        WATER_BACKDROP: "#2e95be",
        AETHER_BACKDROP: "#d240ef",
        NUDE: "#FCF9F7",
      },
      backgroundImage: {
        helplit_sm: 'url("/helplit_sm.png")',
        helplit: 'url("/helplit.png")',
        HELP: "linear-gradient(180deg, #fbc366, #f27d54)",
        ALUD: "linear-gradient(180deg, #d240ef, #8a51cc)",
        SINV: "linear-gradient(180deg, #45e2a0, #2cb865)",
        PCOM: "linear-gradient(180deg, #74bcd8, #2e95be)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
