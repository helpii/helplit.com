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
      animation: {
        scroll: "scroll 80s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 9))" },
        },
      },
      colors: {
        NUMEN_ACCENT: "#2cb865",
        FIRE_BACKDROP: "#ff4444",
        AIR_BACKDROP: "#ffff22",
        EARTH_BACKDROP: "#2cb865",
        WATER_BACKDROP: "#2e95be",
        AETHER_BACKDROP: "#d240ef",
        NUDE: "#FCF9F7",
        CORAL: "#ff7f51",
        COAL: "#383533",
        WOOD: "#4C302E",
        OCEAN: "#10726d",
      },
      backgroundImage: {
        helplit_sm: 'url("/helplit_sm.png")',
        helplit: 'url("/helplit.png")',
        profe: 'url("/profe.png")',
        dust: 'url("/aquarela.jpg")',
        marker_1: 'url("/fun/marker-1.png")',
        helpii_talk: 'url("/helpii-talk.GIF")',
        HELP: "linear-gradient(180deg, #fbc366, #f27d54)",
        ALUD: "linear-gradient(180deg, #d240ef, #8a51cc)",
        SINV: "linear-gradient(180deg, #45e2a0, #2cb865)",
        PCOM: "linear-gradient(180deg, #74bcd8, #2e95be)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
