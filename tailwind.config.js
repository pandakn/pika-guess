/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pokemonYellow: "#FFCB05",
        pokemonRed: "#FF3636",
        pokemonBlue: "#169BD7",
        pokemonGreen: "#31B54A",
        pokemonBrown: "#9C7248",
        pokemonGray: "#A5A5A5",
        pokemonBlack: "#000000",
        pokemonWhite: "#FFFFFF",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "autumn"],
  },
  plugins: [require("daisyui")],
};
