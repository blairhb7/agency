const config = {
  plugins: {"@tailwindcss/postcss":{
    theme: {
      extend: {
        fontFamily: {
          bodoni: ["var(--font-bodoni)", "serif"],
          bebas: ["var(--font-bebas)", "sans-serif"],
          archivo: ["var(--font-archivo)", "sans-serif"],
          monoton: ["var(--font-monoton)", "sans-serif"],
          plaster: ["var(--font-plaster)", "system-ui"],
          protest: ["var(--font-protest)", "sans-serif"],
          sonsie: ["var(--font-sonsie)", "system-ui"],
        },
      },
    },
  }},

};

export default config;
